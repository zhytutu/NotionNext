import dynamic from 'next/dynamic'

const NotionPage = dynamic(() => import('@/components/NotionPage'))

const Announcement = ({ post, className }) => {
  if (post?.blockMap) {
    return (
      <div className={className}>
        {post && (
          <div id='announcement-content' className='bg-[#4f65f0] dark:bg-[#1e1e1e] rounded-xl'>
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
