import React, { useState } from 'react';
//import ReactDOM from 'react-dom/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Post from './components/Post.js';
import ImageVideo from './components/ImageVideo.js';
import Link from './components/Link.js';
import Poll from './components/poll.js';
import { useAuth } from '../HomePage/Components/AuthContext.js';
import './CreatePost.css'
import NavBar from '../HomePage/Components/NavBar/NavBar.js';
import { faImage , faLink , faSquarePollHorizontal ,faFileLines ,faPlus,faTag} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';



export default function CreatePost() {
    const {token} = useAuth()
    
    const[postTitle, setPostTitle] = useState('');
    const[postBody, setPostBody] = useState('');
    const[community,setCommunity]=useState('batates');
    //const[flair,setFlair]=useState('');
    const[NSFW,setNSFW]=useState(false);
    const[oc,setOC]=useState(false);
    const[spoiler,setpoiler]=useState(false);

    let lock=false;

  async function handleSubmit  () {
        
   
    const newPost = { title: postTitle, content: postBody ,communityId: community 
    , isLocked:lock , ac:oc , nsfw:NSFW, isSpoiler:spoiler }
    try {
    const response = await sendInfo(newPost);

    console.log("post created successfully:", response.data);

    } catch (err) {
    console.log(`Error: post not created`);

}
console.log( newPost);
}

async function sendInfo(data){
    const promise = await axios.post("http://localhost:5000/api/createPost/create", data, {
        headers: {
            Authorization:`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhhZmV6IiwiaWF0IjoxNzEzOTY2OTk5fQ.sq-v00RodLyZCJGSZg8HY3IltGiuundSBCyYxoItPfM`
        }
    });
    return promise;
}






    const [showCreate, setShowCreate] = useState(false);
    const [activeComponent, setActiveComponent] = useState(<Post setPostBody={setPostBody}/>);



    const renderComponent = (component) => {
        setActiveComponent(component);
        // Clear the post body when switching components
        setPostBody('');
    };




    return (
        <div>
            <NavBar />

                <div className="create-post-container">
                    <label htmlFor="myDropdown">Choose a community</label>
                    <select id="myDropdown" name="myDropdown" onChange={(e) => setCommunity(e.target.value)} >
                        <option value="batates" >Community 1</option>
                        <option value="friedChicken" >Community 2</option>
                        <option value="wahed" >Community 3</option>
                    </select>
                    
                    <div className="toolbar">
                        <button className="toolbar-button postbtn1" onClick={() => renderComponent(<Post setPostBody={setPostBody}/>)}><FontAwesomeIcon icon={faFileLines} /> Post</button>
                        <button className="toolbar-button postbtn2" onClick={() => renderComponent(<ImageVideo />)}><FontAwesomeIcon icon={faImage} /> Image & Video</button>
                        <button className="toolbar-button postbtn3" onClick={() => renderComponent(<Link setPostBody={setPostBody} />)}><FontAwesomeIcon icon={faLink} />Link</button>
                        <button className="toolbar-button postbtn4" onClick={() => renderComponent(<Poll setPostBody={setPostBody}/>)}> <FontAwesomeIcon icon={faSquarePollHorizontal} /> Poll</button>
                    </div>
                    
                    <input type="text" placeholder="Title" className="title" onChange={(e)=>setPostTitle(e.target.value)} />
                    

                    
                    <div className="active-component">{activeComponent}


                    </div>
                    
                    <div className="postprob">
                         <button  className={`postprobbutton ${oc ? 'clicked' : ''}`} id="original content" onClick={() =>{setOC(!oc)}}><FontAwesomeIcon icon={faPlus} /> OC</button>
                         <button className={`postprobbutton ${spoiler ? 'clicked' : ''}`} id="spoiler" onClick={() => {setpoiler(!spoiler)}}><FontAwesomeIcon icon={faPlus} />Spoiler</button>
                         <button className={`postprobbutton ${NSFW ? 'clicked' : ''}`} id="not safe" onClick={() => {setNSFW(!NSFW)}}><FontAwesomeIcon icon={faPlus} />NSFW</button>
                         <button className="postprobbutton" id="flair"><FontAwesomeIcon icon={faTag} />Flair</button>
                    </div>
                    
                    <div className="savepost">
                    <button className="postprobbutton" id="draft"> Save Draft</button>
                    <button className="postprobbutton" id="post" onClick={handleSubmit}> Post</button>
                    </div>
                  
                
                </div>
            
        </div>
    );
}
