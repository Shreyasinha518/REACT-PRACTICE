const WelcomeMessage=({onGetPostClick})=>{
    return(
        <center class="welcome-message">
             <h1 >THERE ARE NO POSTS!</h1>
    <button type="button" class="btn btn-primary"
    onClick={onGetPostClick}>Get Posts From Server</button>
    </center>
    )
}
export default WelcomeMessage;