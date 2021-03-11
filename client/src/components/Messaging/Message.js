import { Button } from '@material-ui/core';
import { 
    MessageBox,
    ChatItem,
    SystemMessage,
    MessageList,
    Input
 } from 'react-chat-elements';

export default function messaging() {
    
    const message = [{
        text: "fake messages????"
    }]   

    return (

        <div>
            <ChatItem 
                subtitle={`message`}
                title={`ughalsk;djfkl;sadjf`}
                date={new Date()}
            />
            <Input
                placeholder="type message here"
            />
            <Button>           
                Send Message
            </Button>
        </div>

    )
}






// import React from 'react';
// import MessageTitle from './Title';
// import MessageList from './MessageList';
// import SendMessageForm from './SendMessageForm';
// import SingleMessage from './SingleMessage';




// class messaging extends React.Component {

//     constructor() {
//         super()
//         this.state = {
//             messages: mockMessage
//         }
//     }



//     render () {
//         return (
//             <div className="messages">
//                 <MessageTitle />
//                 <MessageList messages={this.state.messages} />
//                 <SendMessageForm />
//             </div>
//         )
//     }
// }


//     export default messaging;



// const mockMessage = [
//     {
//         senderId: "Annelise?",
//         text: "hello?"
//     },
//     {
//         senderId: "Mona",
//         text: "Hi"
//     }
// ]


// // export default function messageThread() {

// //     return (
// //         console.log("Hello?"),
// //         <div className="message">
// //             {MessageChannel.senderId}
// //             Hello?
// //         </div>
// //     )
// // }


//     export default function messageThread () {
//         // constructor() 
//         //     super()
//         //     this.state = {
//         //         messages: mockMessage
//         //     }

//             return (
//                 <div className="message">
//                     <header>hello?</header>
//                     <MessageTitle />
//                 </div>
//             )
//         }