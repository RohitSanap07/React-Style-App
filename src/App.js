import "./App.css"

const thankyou = {
    color: "green",
    textAlign: "center",
    fontSize: "25px"
    
}

function Winners()
{


    return(
        <div  style={{
            color: "#e68a00",
            textAlign: "center",
            fontSize: "30px",
            fontWeight: "bold"

        }} >India's Medal Winners in Paris Olympic 2024</div>
    )
}

function PlayerName({name, emoji}){
    return (
        <div className="heading" >
           <hr></hr> Winner {name} {emoji}<hr></hr>
        </div>
    )

}

function ThankYou(){
    return (
        <div style={thankyou}>Thank You⭐</div>
    )
}

export default Winners;
export {PlayerName,ThankYou};