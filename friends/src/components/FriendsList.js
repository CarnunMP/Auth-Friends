import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function FriendsList(props) {
    const { friendsList, removeFriend, authCheck } = props;

    return (
        <Route render={() => (
            authCheck() ?
            (<div className="friends-list">
                {friendsList.map(friend => <Friend friend={friend} removeFriend={removeFriend} key={friend.id}/>)}
            </div>) :
            <Redirect to="/" />
        )} />
    )
}

function Friend(props) {
    const { friend, removeFriend } = props;

    return (
        <div className="friend" id={friend.id} onClick={() => removeFriend(friend.id)}>
            {JSON.stringify(friend)}
        </div>
    )
}