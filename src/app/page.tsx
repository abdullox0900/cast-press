import AudioPlayer from '@/components/AudioPlayer/AudioPlayer'
import LatestPosts from '@/components/LatestPosts/LatestPosts'
import PodcastList from '@/components/PodcastList/PodcastList'
import TeamSection from '@/components/TeamSection/TeamSection'

export default function Home() {
	return (
		<>
			<AudioPlayer />
			<PodcastList />
			<TeamSection />
			<LatestPosts title='Latest Posts' />
		</>
	)
}
