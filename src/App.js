import React, {useEffect} from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
const alanKey ='674de3f2a782919ec7c66b38123c5a072e956eca572e1d8b807a3e2338fdd0dc/stage';
const App =()=>{
useEffect(()=>{
alanBtn({
    key :alanKey,
    onCommand:({command,articles})=>{
        if(command === 'newHeadlines')
        {
            console.log(articles);
        }
    }
})
},[])

    return (
        <div>
            <h1>
                Arf AI
            </h1>
        </div>
    )
}
export default App;