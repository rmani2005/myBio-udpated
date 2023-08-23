import React, { useState } from "react";
import Layout from "../../components/Layout";

export default function AddPost() {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (title && content) {
            
            let res = await fetch("http://localhost:3000/api/addPost", {
                method: "POST",
                body: JSON.stringify({
                  title: title,
                  content: content,
                }),
              });
              res = await res.json();
              setPostsState([...postsState, res]);
              setTitle("");
              setContent("");
              setLoading(false);

                setMessage('Post added successfully');
            
        } else {
            return setError('All fields are required')
        }
    }

    return (
        <Layout>
            <form onSubmit={handleSubmit} className="form">
                {
                    error ? (
                        <div className="alert-error">
                            {error}
                        </div>
                    ) : null
                }
                {
                    message ? (
                        <div className="alert-message">
                            {message}
                        </div>
                    ) : null
                }
                <div className="form-group">
                    <label>Title</label>
                    <input type="text"
                        placeholder="Title of the post"
                        onChange={e => setTitle(e.target.value)}
                        value={title}
                    />
                </div>
                <div className="form-group">
                    <label>Content</label>
                    <textarea
                        name="content"
                        placeholder="Content of the post"
                        value={content}
                        onChange={e => setContent(e.target.value)}
                        cols={20}
                        rows={8}
                    />
                </div>
                <div className="form-group">
                    <button type="submit" className="submit_btn">Add Post</button>
                </div>
            </form>
            <style jsx>
                {`
                    .form{
                        width:400px;
                        margin:10px auto;
                    }
                    .form-group{
                        width:100%;
                        margin-bottom:10px;
                        display:block;
                    }
                    .form-group label{
                        display:block;
                        margin-bottom:10px;
                    }
                    .form-group input[type="text"]{
                        padding:10px;
                        width:100%;
                    }
                    .form-group textarea{
                        padding:10px;
                        width:100%;
                    }
                    .alert-error{
                        width:100%;
                        color:red;
                        margin-bottom:10px;
                    }
                    .alert-message{
                        width:100%;
                        color:green;
                        margin-bottom:10px;
                    }
                `
                }
            </style>
        </Layout>
    )
}