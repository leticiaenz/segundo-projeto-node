import express, { request } from 'express';

const app =  express();

app.get("/", (request, response) => {
    return response. json({ message: "hello Word"});
});

app.post("/courses", (request, reponse) => {
    const { name } = request.body;
    return reponse.json({ name });
})


app.listen(3333, () => console.log("Sever is running"));