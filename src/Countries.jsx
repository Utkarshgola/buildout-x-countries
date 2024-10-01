export default function Countries ({name,flag,abbr}){
    return (
        <div style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            flexDirection:"column",
            border:" 2px solid grey",
            borderRadius:"5px",
            height:"200px",
            width:"200px"

        }}>
            <img src={flag} alt={abbr} height={100} width={100}/>
            <p>{name}</p>
        </div>
    )
}  