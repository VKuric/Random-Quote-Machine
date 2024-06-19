//i need an App container thats going to render the top and bottom components 
// this App container is going to manage state also
const  quotes = [
    {
  text: "It’s not the years in your life that count. It’s the life in your years.",
  author: "-Abraham Lincon"
    },
    {
      text: "When I let go of what I am, I become what I might be.",
      author: "- Lao Tzu"
    },
    {
      text: "Whatever you can do, or dream you can, begin it. Boldness has genius, power and magic in it",
      author: "- Johann Wolfgang von Goethe"
    },
    {
      text: "Ask and it will be given to you; search, and you will find; knock and the door will be opened for you.",
      author: "- Jesus"
    },
    {
      text: "Start where you are. Use what you have. Do what you can.",
      author: "- Arthur Ashe"
    },
    {
      text: "The best revenge is massive success.",
      author: "- Frank Sinatra"
    },
    {
      text: "Too many of us are not living our dreams because we are living our fears.",
      author: "- Les Brown"
    },
    {
      text: "A truly rich man is one whose children run into his arms when his hands are empty",
      author: "- Unknown"
    },
    {
      text: "If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.",
      author: "- Oprah Winfrey"
    },
    {
      text: "Whatever the mind of man can conceive and believe, it can achieve.",
      author: "- Napoleon Hill"
    }
  ]
  const color= [
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
  ]
  
  import {FaTwitter, FaQuoteLeft} from "https://cdn.skypack.dev/react-icons@4.4.0/fa";
  // import Font from "https://cdn.skypack.dev/googlefonts@1.1.3"
  // import * as reactJss from "https://cdn.skypack.dev/react-jss@10.9.0";
  // const useStyles = createUseStyles({
  //   wrapper: {
  //     padding: 20
  //   }
  // });
  class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        quotesArray: quotes,
        colorArray: color,
        index: Math.floor(Math.random() * quotes.length),
        quote: "",
        author: ""
      } 
      this.nextQuote = this.nextQuote.bind(this)
  } 
    
    nextQuote() {
      this.setState(
        (state) => {
           return {
          index: Math.floor(Math.random() * (state.quotesArray.length)),
          quote: state.quotesArray[state.index].text,
          author: state.quotesArray[state.index].author 
       } 
     }  
   )
      const nodeList = document.querySelectorAll(".theme")
      for (let i = 0; i < nodeList.length; i++) {
        // nodeList[i].style.background = color[this.state.index]
        nodeList[i].style.background = color[this.state.index]
        
      }
      document.body.style.background = color[this.state.index]
      // document.getElementById("new-quote").style.color = color[this.state.index]
      // document.querySelectorAll("theme").style.backgroundColor = color[this.state.index]
  }
    
    componentDidMount() {
      window.addEventListener('load', this.nextQuote);
     
      
   }
   componentWillUnmount() { 
     window.removeEventListener('load', this.nextQuote)
   }
      render() {
        const colors = {
          color: color[this.state.index],
          background: color[this.state.index]
        }
    return (
      <div id = "quote-box" class = "quote-box">
         <QuoteSection quote = {this.state.quote} author = {this.state.author} />
         <div className = "btn-sect">
          <a  href = {`https://twitter.com/intent/tweet?text=${this.state.quote}${this.state.author}`} target = "_top" id = "tweet-quote" className = "tweet-icon theme">
          <FaTwitter onClick = {this.tweetQuote} />
          </a>
          <button onClick = {this.nextQuote} id = "new-quote" className = "new-quote theme">
            New quote
          </button> 
        </div>
      </div>
      ) 
    }
  }
  function QuoteSection(props) {
    return (
      <div id = "text">
        <p className = "quote-text">
          <FaQuoteLeft className = "quote-left"/>   
          {props.quote}
        </p>
        <p id = "author" className = "author-text">{props.author}</p>
      </div>
    )
  }
  
  const ROOT = ReactDOM.createRoot(document.getElementById("root"))
    ROOT.render(<App />)