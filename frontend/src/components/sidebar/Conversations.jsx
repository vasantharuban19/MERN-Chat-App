import useGetConversations from "../../hooks/useGetCoversations";
import { RandomEmojis } from "../../utils/RandomEmojis";
import Conversation from "./Conversation.jsx";

const Conversations = () => {
	const { loading, conversations } = useGetConversations();
	// console.log(conversations);
	
	return (
		<div className='py-2 flex flex-col overflow-auto'>
			{conversations.map((conversation, idx) => (
				<Conversation
					key={conversation._id}
					conversation={conversation}
					emoji={RandomEmojis()}
					lastIndex={idx === conversations.length - 1}
				/>
			))}

			{loading ? <span className='loading loading-spinner mx-auto'></span> : null}
		</div>
	);
};
export default Conversations;