import AudioPlayer from '@/components/AudioPlayer/AudioPlayer'
import CommentForm from '@/components/CommentForm/CommentForm'
import CommentsSection from '@/components/CommentsSection/CommentsSection'
import LatestPosts from '@/components/LatestPosts/LatestPosts'
import PodcastSummary from '@/components/PodcastSummary/PodcastSummary'
import TagsAndShare from '@/components/TagsAndShare/TagsAndShare'

const page = () => {
	return (
		<div>
			<AudioPlayer />
			<PodcastSummary />
			<TagsAndShare />
			<LatestPosts title='Related Posts' />
			<CommentForm />
			<CommentsSection />
		</div>
	)
}

export default page
