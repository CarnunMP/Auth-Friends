import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function FriendsList(props) {
    const { friendsList, authCheck } = props;

    return (
        <Route render={() => (
            authCheck() ?
            (<div className="friends-list">
                {friendsList.map(friend => <Friend friend={friend} key={friend.id}/>)}
            </div>) :
            <Redirect to="/" />
        )} />
    )
}

function Friend(props) {
    const { friend } = props;

    return (
        <div className="friend" id={friend.id}>
            {JSON.stringify(friend)}
        </div>
    )
}