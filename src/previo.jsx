
import { marked } from "marked";
import "./App.css";



marked.setOptions({
    breaks: true,
  })

export default function Previewer({ text, id }) {


    return (
        <div id={id}
            dangerouslySetInnerHTML={{ __html: marked(text) }}>
        </div>
    )
}

