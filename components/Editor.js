import React, { useState } from 'react'
import dynamic from 'next/dynamic'
const Editor = dynamic(
    () => {
        return import("react-draft-wysiwyg").then(mod => mod.Editor);
    },
    { ssr: false }
)
import { convertToRaw, EditorState } from 'draft-js';
import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import editorStyle from '../styles/Editor.module.css'
import { draftToMarkdown } from 'markdown-draft-js';


const MyEditor = () => {
    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty()
    );
    let inputData = convertToRaw(editorState.getCurrentContent())
    let md = draftToMarkdown(inputData, {
        remarkableOptions: {
            entityItems: {
                image: {
                    open: function (entity) {
                        return '';
                    },

                    close: function (entity) {
                        return `![](${entity.data.src})`;
                    }
                }
            }
        }
    })
    return (
        <>
            <div className={editorStyle.page}>
                <Editor
                    editorState={editorState}
                    wrapperClassName={editorStyle.editorWrapper}
                    editorClassName={editorStyle.editorMain}
                    toolbarClassName={editorStyle.editorToolbar}
                    onEditorStateChange={setEditorState}
                />
                <textarea
                    disabled
                    value={editorState && md}
                ></textarea>
                {console.log(md)}
                <a href="#" className="btn">Submit</a>
            </div>

        </>
    )
}

export default MyEditor