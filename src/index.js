import React from 'react'
import ReactDom from 'react-dom'
import faker from 'faker'
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = () => {
    return (
        < div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    timeAgo="Today at 4:51PM"
                    content="Nice blog post!"
                    avatar={faker.image.avatar()}
                />

            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Alex"
                    timeAgo="Today at 10:23AM"
                    content="Nice blog post!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Jane"
                    timeAgo="Yesterday at 8:01PM"
                    content="Nice blog post!"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    )
}

ReactDom.render(
    <App />,
    document.querySelector('#root')
)


