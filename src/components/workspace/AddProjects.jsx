
import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import { Header } from "./Header";
import axios from 'axios';

function Addproject(props) {

    const [successMessage, setSuccessMessage] = useState("");
    const [failMessage, setFailMessage] = useState("");
    const [isexpanded, setIsexpanded] = useState(false);
    const [form, Setform] = useState({
        title: "",
        description: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;

        Setform(prevform => {
            return {
                ...prevform,
                [name]: value
            };
        });
    }

    async function Submit(event) {
        event.preventDefault();


        try {
            await axios.post("https://localhost:44314/api/Projects", form)
            setSuccessMessage("Project added !");
            setIsexpanded(false);

            setTimeout(() => { setSuccessMessage("") }, 4000)
        }
        catch (err) {
            setFailMessage("An error occured while adding this project , please try again !");
            setTimeout(() => { setFailMessage("") }, 4000)

        };

        Setform({
            title: "",
            description: ""
        });
    }
    function expand() {
        setIsexpanded(true);
    }

    return (
        <div>
            <Header />
            <form className="add-project">
                {isexpanded && <input
                    name="title"
                    onChange={handleChange}
                    value={form.title}
                    placeholder="Project name"
                />}
                <textarea
                    onClick={expand}
                    name="description"
                    onChange={handleChange}
                    value={form.description}
                    placeholder={isexpanded ? "Project description" : "Add a project..."}
                    rows={isexpanded ? 3 : 1}
                />
                <Zoom in={isexpanded ? true : false}>
                    <Fab onClick={Submit}><AddIcon /></Fab>
                </Zoom>
                <span style={{ color: 'green' }}>{successMessage}</span>
                <span style={{ color: 'red' }}>{failMessage}</span>
            </form>


        </div>
    );
}

export default Addproject;