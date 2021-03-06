import react from 'react';
import MessageTitle from './Title';
//import MessageList from './MessageList';
//import SendMessageForm from './SendMessageForm';


const mockMessage = [
    {
        senderId: "Annelise?",
        text: "hello?"
    },
    {
        senderId: "Mona",
        text: "Hi"
    }
]


// export default function messageThread() {

//     return (
//         console.log("Hello?"),
//         <div className="message">
//             {MessageChannel.senderId}
//             Hello?
//         </div>
//     )
// }


    export default function messageThread () {
        // constructor() 
        //     super()
        //     this.state = {
        //         messages: mockMessage
        //     }

            return (
                <div className="message">
                    <header>hello?</header>
                    <MessageTitle />
                </div>
            )
        }