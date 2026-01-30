import dynamic from 'next/dynamic'
import { GreetingsWords } from './InfoCard'

const NotionPage = dynamic(() => import('@/components/NotionPage'))

const Announcement = ({ post, className, showGreetings = false }) => {
  if (post?.blockMap) {
    return (
      <div>
        {post && (
          <div id='announcement-content' className={`${className || 'bg-[#4f65f0] dark:bg-[#1e1e1e]'} rounded-xl p-3 overflow-hidden`}>
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
