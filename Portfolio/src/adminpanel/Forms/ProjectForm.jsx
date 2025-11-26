import React, { useState } from "react";
import "../css/ProjectForm.css";

export default function ProjectForm() {
    const [form, setForm] = useState({
        title: "",
        description: "",
        techStack: [],
        techInput: "",
        repoUrl: "",
        liveUrl: "",
        image: "",
        isPublic: true,
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // Add tech stack item
    const addTech = (e) => {
        e.preventDefault();
        if (form.techInput.trim() !== "") {
            setForm({
                ...form,
                techStack: [...form.techStack, form.techInput.trim()],
                techInput: "",
            });
        }
    };

    const removeTech = (tech) => {
        setForm({
            ...form,
            techStack: form.techStack.filter((t) => t !== tech),
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append("title", form.title);
        data.append("description", form.description);
        data.append("repoUrl", form.repoUrl);
        data.append("liveUrl", form.liveUrl);
        data.append("isPublic", form.isPublic);
        data.append("image", form.image);

        form.techStack.forEach((t) => data.append("techStack[]", t));

        console.log("Project FormData:", ...data);
    };

    return (
        <div className="project-overlay">
            <form className="project-card" onSubmit={handleSubmit}>
                <h2>Create Project</h2>

                <div className="input-group">
                    <label>Project Title</label>
                    <input
                        type="text"
                        name="title"
                        value={form.title}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="input-group">
                    <label>Description</label>
                    <textarea
                        name="description"
                        rows="3"
                        value={form.description}
                        onChange={handleChange}
                        placeholder="Short description of the project"
                    ></textarea>
                </div>

                {/* Tech Stack */}
                <div className="input-group">
                    <label>Tech Stack</label>
                    <div className="tech-row">
                        <input
                            type="text"
                            name="techInput"
                            value={form.techInput}
                            onChange={handleChange}
                            placeholder="Add tech (React, Node, etc)"
                        />
                        <button className="tech-add-btn" onClick={addTech}>
                            +
                        </button>
                    </div>

                    <div className="tech-list">
                        {form.techStack.map((tech, idx) => (
                            <span key={idx} className="tech" onClick={() => removeTech(tech)}>
                                {tech} ×
                            </span>
                        ))}
                    </div>
                </div>

                <div className="input-group">
                    <label>GitHub Repository URL</label>
                    <input
                        type="text"
                        name="repoUrl"
                        value={form.repoUrl}
                        onChange={handleChange}
                        placeholder="https://github.com/username/repo"
                    />
                </div>

                <div className="input-group">
                    <label>Live Project URL</label>
                    <input
                        type="text"
                        name="liveUrl"
                        value={form.liveUrl}
                        onChange={handleChange}
                        placeholder="https://yourproject.vercel.app"
                    />
                </div>

                <div className="input-group">
                    <label>Project Image</label>
                    <input
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
                    />
                </div>


                <div className="checkbox-group">
                    <input
                        type="checkbox"
                        name="isPublic"
                        checked={form.isPublic}
                        onChange={(e) =>
                            setForm({ ...form, isPublic: e.target.checked })
                        }
                    />
                    <label>Make Public</label>
                </div>

                <button className="project-btn" type="submit">
                    Save Project
                </button>
            </form>
        </div>
    );
}
