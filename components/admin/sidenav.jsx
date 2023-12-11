import { useEffect, useRef, useState } from "react";
import Form from "./form/form";
export default function Sidenav() {


    return (
        <>
            


            <div class="!pl-[260px] text-center" id="content">

                

                <div class="my-5 flex text-start bg-white">
                    <Form/>
                    
                </div>
            </div>
        </>
    );
}