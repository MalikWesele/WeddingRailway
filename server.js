const http = require("http");
const fs = require("fs");
const path = require("path");


/*
    Railway automatycznie przekazuje PORT.

    8080 jest tylko wartością zapasową
    podczas lokalnego uruchamiania.
*/

const PORT =
    process.env.PORT || 8080;


const HOST =
    "0.0.0.0";


const PUBLIC_DIRECTORY =
    path.join(
        __dirname,
        "public"
    );


/*
    Typy plików.
*/

const mimeTypes = {

    ".html":
        "text/html; charset=utf-8",

    ".css":
        "text/css; charset=utf-8",

    ".js":
        "application/javascript; charset=utf-8",

    ".json":
        "application/json; charset=utf-8",

    ".svg":
        "image/svg+xml",

    ".png":
        "image/png",

    ".jpg":
        "image/jpeg",

    ".jpeg":
        "image/jpeg",

    ".ico":
        "image/x-icon"

};


const server =
    http.createServer(
        (request, response) => {

            /*
                Endpoint do sprawdzania,
                czy Railway widzi aplikację.
            */

            if (request.url === "/health") {

                response.writeHead(
                    200,
                    {
                        "Content-Type":
                            "application/json; charset=utf-8"
                    }
                );

                response.end(
                    JSON.stringify({
                        status: "ok"
                    })
                );

                return;
            }


            /*
                Usuwamy parametry URL.
                np.
                /?test=1
                ->
                /
            */

            const requestUrl =
                request.url.split("?")[0];


            /*
                Strona główna.
            */

            const requestedFile =
                requestUrl === "/"
                    ? "index.html"
                    : requestUrl;


            /*
                Tworzymy ścieżkę do pliku.
            */

            const filePath =
                path.join(
                    PUBLIC_DIRECTORY,
                    requestedFile
                );


            /*
                Zabezpieczenie przed próbą
                wyjścia poza katalog public.
            */

            if (
                !filePath.startsWith(
                    PUBLIC_DIRECTORY
                )
            ) {

                response.writeHead(403);

                response.end(
                    "Forbidden"
                );

                return;
            }


            /*
                Czytamy plik.
            */

            fs.readFile(
                filePath,
                (error, content) => {

                    if (error) {

                        if (
                            error.code
                            ===
                            "ENOENT"
                        ) {

                            response.writeHead(
                                404,
                                {
                                    "Content-Type":
                                        "text/plain; charset=utf-8"
                                }
                            );

                            response.end(
                                "404 - Not Found"
                            );

                            return;
                        }


                        response.writeHead(
                            500,
                            {
                                "Content-Type":
                                    "text/plain; charset=utf-8"
                            }
                        );

                        response.end(
                            "500 - Internal Server Error"
                        );

                        return;
                    }


                    const extension =
                        path
                            .extname(filePath)
                            .toLowerCase();


                    const contentType =
                        mimeTypes[extension]
                        ||
                        "application/octet-stream";


                    response.writeHead(
                        200,
                        {
                            "Content-Type":
                                contentType
                        }
                    );


                    response.end(content);

                }
            );

        }
    );


server.listen(
    PORT,
    HOST,
    () => {

        console.log(
            `Wedding website running on port ${PORT}`
        );

    }
);