import React, {useState} from 'react' ;
import {v4 as uuidv4} from 'uuid' ;
import toast from 'react-hot-toast' ;
import {useNavigate} from 'react-router-dom' ;

const Home = () => {

    const navigate = useNavigate() ;

    const [roomId, setRoomId] = useState("") ;
    const [username, setUsername] = useState("") ;

    const createNewRoom = (e) => {
        e.preventDefault() ;
        const id = uuidv4() ;
        setRoomId(id) ;
        // toast.success('Created a new room') ;
        toast.success('Created a new room', {
             style: {
                //  border: '1px solid #713200',
                 padding: '16px',
                 background: '#eee',
                 color: 'black',
                 fontWeight: 'bold',
                 borderRadius: '100px',
                //  borderShadow: ['10px', '10px', 'white']
                },
            iconTheme: {
                  primary : '#4aed88' ,
                 secondary: '#FFFAEE',
                 },
        });
    } ;

    const joinRoom = () => {

        // Validation

        if(!roomId || !username){
            toast.error('ROOM ID and Username required', {
            style: {
                //  border: '1px solid #713200',
                 padding: '16px',
                 background: '#eee',
                 color: 'black',
                 fontWeight: 'bold',
                 borderRadius: '100px',
                //  borderShadow: ['10px', '10px', 'white']
                },
            iconTheme: {
                  primary : 'red' ,
                 secondary: '#FFFAEE',
                 },
            }) ;

            return ;
        }

        //Redirect

        navigate(`/editor/${roomId}`, {
            state : {
                username
            }
        })
    }

    const handleEnterKey = (e) => {
        if(e.code === 'Enter') {
            joinRoom() ;
        }
    }

  return (
    <div className = "homePageWrapper">
        <div className="formWrapper">
            <img className = "homePageLogo"src="/logo.png" alt="mock-code logo" />
            <h4 className="mainLabel">Paste invitation ROOM ID</h4>
            <div className="inputGroup">
                <input 
                    type="text" 
                    className='inputBox' 
                    value = {roomId} 
                    onChange = {(e) => setRoomId(e.target.value)} 
                    placeholder='ROOM ID' 
                    onKeyUp = {handleEnterKey}/>

                <input
                     type="text" 
                     className='inputBox' 
                     placeholder='USERNAME' 
                     value={username} 
                     onChange = { (e) => setUsername(e.target.value)} 
                     onKeyUp = {handleEnterKey}/>

                <button 
                    className="btn joinBtn" 
                    onClick={joinRoom}>Join</button>

                <span className="createInfo">
                    If you don't have an invite then create &nbsp;
                    <a  onClick = {createNewRoom} href="#" className="createNewBtn">new room</a>
                </span>
            </div>
        </div>

        <footer>
            <h4>Built with 💛 by <a href="https://www.linkedin.com/in/aditya-prakash-pandewa-b3628718b/">Aditya</a></h4>
        </footer>
    </div>
  )
}

export default Home
