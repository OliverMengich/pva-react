import './App.css'
import { useEffect, useRef } from 'react';
import ChatBoxComponent from './components/ChatBox.component';
import BotApp from './components/Bot.component';
function App() {
	return (
		<div className="App">
			<BotApp/>
			{/* <ChatBoxComponent /> */}
			{/* <iframe src="https://web.powerva.microsoft.com/environments/Default-84c31ca0-ac3b-4eae-ad11-519d80233e6f/bots/new_bot_0cb0bf9d54ee4df1b799f2a3fa555c36/webchat" 
				title="Web Chat"
				id='webchat'
				sandbox='allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts'
				
				ref={iframeRef}
				style={{width: "90vw", height: '50vh', border:'0px'}}></iframe> */}
		</div>
  )
}

export default App
