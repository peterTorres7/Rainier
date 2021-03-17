import { Button } from '@material-ui/core';

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