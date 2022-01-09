import "./src/css/index.css"

const addScript = url => {
    const script = document.createElement("script")
    script.src = url
    script.async = true
    document.body.appendChild(script)
  }
  
  export const onClientEntry = () => {
    window.onload = () => {
      addScript("https://tenor.com/embed.js")
    }
  }