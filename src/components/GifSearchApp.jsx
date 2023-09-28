import { useState } from "react"
import {AddCategory, GifGrid} from "./index";

export function GifSearchApp() {

    const [categories, setCategories] = useState(['power'])

    const onAddCategory = (newValue) => {
        if(categories.includes(newValue)) return;
        setCategories([ newValue, ...categories ]);
    }

    return (
        <>  
            <h1>Git Search App</h1>
            
            <AddCategory onNewValue={ onAddCategory } />
          
            {
                categories.map( category => 
                    <GifGrid 
                        key={ category } 
                        category={ category } /> 
                )
            }
        </>
    )
}
