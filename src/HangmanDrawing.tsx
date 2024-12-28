export function HangmanDrawing(){
    return (<div style = {{position: "relative"}}>

        <div
        // horizontal hook section
        style={{ 
            height: "10px", 
            width: "200px", 
            background: "black",
            marginLeft: "120px",
            marginTop: "0px"
        }}
        />  

        <div 
        // long vertical stick
        style={{ 
            height: "400px", 
            width: "10px", 
            background: "black",
            marginLeft: "120px"
        }}
        />
        
        <div style={{ height: "10px", width: "250px", background: "black"}}/>

    </div>
    )
}