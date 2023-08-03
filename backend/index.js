const express = require("express")
const app = express();
const cors = require("cors");
const Todo = require("./schema/Todoschema")


require("./dbconn/connection")

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (req, res) => {
    res.send("hello guys")
})

app.post("/createtodo", async (req, resp) => {
    try {
        const todo = new Todo(req.body);
        let result = await todo.save();
        result = result.toObject();
        resp.status(201).send(result);
    } catch (e) {
        resp.send("Something Went Wrong");
    }
});

app.get('/gettodos', async (req, res) => {
    try {
        const data = await Todo.find();
        res.status(200).send(data);
    } catch (error) {
        res.status(404).send(error)
    }
})

app.delete('/deletetotdo/:id', async (req, res) => {
    try {
        const id = req.params.id
        const data = await Todo.findByIdAndDelete({_id:id},{new:true})
        res.status(200).send(id)
    } catch (error) {
        res.status(404).send(error)
    }
})

app.get('/gettodos/:id', async (req, res) => {
    try {
        // console.log(req.body)
        const dataa = await Todo.findById({ _id: req.params.id });
        res.status(200).send(dataa);
    } catch (e) {
        res.status(404).send(error)
    }
})

app.patch('/updatetodo/:id', async (req, res) => {
    try {
        // console.log(req.body)
        const dataa = await Todo.findByIdAndUpdate({ _id: req.params.id },req.body);
        res.status(200).send(dataa);
    } catch (e) {
        res.status(404).send(error)
    }
})

app.listen(5000, () => {
    console.log("lestining at port 5000")
});