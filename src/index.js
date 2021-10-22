import React from "react";
import ReactDom from "react-dom";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <h4>Warning</h4>
                <div>Are you sure want delete?</div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author='Pepe' 
                    timeAgo='Today at 6:00PM' 
                    comment='Good post' 
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author='Miguelon' 
                    timeAgo='Today at 02:00PM' 
                    comment='other post' 
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author='Micky' 
                    timeAgo='Yesterday at 05:00PM' 
                    comment='Good job'
                />
            </ApprovalCard>
        </div>
    );
};

ReactDom.render(<App/>, document.getElementById('root'));