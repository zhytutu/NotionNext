import dynamic from 'next/dynamic'
import { GreetingsWords } from './InfoCard'

const NotionPage = dynamic(() => import('@/components/NotionPage'))

const Announcement = ({ post, className, showGreetings = false }) => {
  if (post?.blockMap) {
    return (
      <div className={className}>
        {post && (
          <div id='announcement-content' className='bg-[#3B82F6] dark:bg-[#1e1e1e] rounded-xl'>
            {showGreetings && <GreetingsWords />}
            <NotionPage post={post} />
          </div>
        )}
      </div>
    )
  } else {
    return <></>
  }
}
export default Announcement
