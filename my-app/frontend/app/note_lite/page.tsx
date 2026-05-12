import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

export default function NoteUi(){
    return(
        <div className="flex justify-center items-center h-full w-full flex-col">
            <h1> hi emu hellow there </h1>

            <h1> signnup if its your first time </h1>
            <SignUpButton/>

            <h1> already signin  the login </h1>
            <SignInButton/>

            <UserButton/>
        </div>
    )
}