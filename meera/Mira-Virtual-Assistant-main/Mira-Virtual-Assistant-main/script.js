let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")
function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="hi-GB "
    window.speechSynthesis.speak(text_speak)
}
// Request microphone access
navigator.mediaDevices.getUserMedia({ audio: true })
  .then((stream) => {
    console.log('Microphone access granted');
  })
  .catch((err) => {
    console.error('Microphone access denied', err);
  });


function wishme(){
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning Sir")
    }
    else if(hours>=12 && hours<16){
        speak("Good afternoon Sir")
    }else{
        speak("Good evening Sir")
    }
}
window.addEventListener('load',()=>{
    wishme()
})
let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition
let recognition =new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript= event.results[currentIndex][0].transcript
    content.innerText=transcript
    takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"
})
function takeCommand(message){
     btn.style.display="flex"
     voice.style.display="none"
    if(message.includes("hello")|| message.includes("hey")){
        speak("hello sir,what can i help you ?")
    }
    else if(message.includes("who are you")||message.includes("hu r u")){
        speak("i am mira, your virtual assistant , created by ashutosh sir")
    }
    else if(message.includes("open youtube")){
        speak("opening youtube...")
        window.open("https://www.youtube.com","_blank")
    }
    else if(message.includes("open google")){
        speak("opening google...")
        window.open("https://www.google.com","_blank")
    }
    else if(message.includes("open facebook")){
        speak("opening facebook...")
        window.open("https://www.facebook.com","_blank")
    }
    else if(message.includes("open instagram")){
        speak("opening instagram...")
        window.open("https://www.instagram.com","_blank")
    }
    else if(message.includes("open chat gpt")){
        speak("opening chat gpt...")
        window.open("https://chatgpt.com","_blank")
    }
    else if(message.includes("open calculator")){
        speak("opening calculator...")
        window.open("calculator://")
    }
    else if(message.includes("what is javascript")){
        speak("JavaScript is the Programming Language for the Web.JavaScript can update and change both HTML and CSS.JavaScript can calculate, manipulate and validate data.")
        
    }
    else if(message.includes("open whatsapp")){
        speak("opening whatsapp...")
        window.open("whatsapp://")
    }
    else if(message.includes("time")){
        let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
        speak(time)
    }
    else if(message.includes("date")){
        let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
        speak(date)
    }
    else{
        let finalText="this is what i found on internet regarding" + message.replace("mira","") ||message.replace("meera","") ||message.replace("mera","") 
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message.replace("meera","")}`,"_blank")
    }
}