import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { isEmpty } from "../Utils";
import LikeButton from "./LikeButton";

const Card = ({ post }) => {
    const [isLoading, setIsLoading] = useState(true);
    const userData = useSelector((state) => state.userReducer);

    useEffect(() => {
        !isEmpty(userData[0]) && setIsLoading(false);
    }, [userData]);

    return (
        <li className="card-container" key={post._id}>
            {isLoading ? (
                <i className="fas fa-spinner fa-spin"></i>
            ) : (
                <>
                <div className="card-left">
                    <img
                    src={
                        !isEmpty(
                            userData[0] &&
                            userData.map((user) => {
                                if (user._id === post.posterId) return user.picture;
                            })
                            .join("")
                        )
                    }
                    alt="poster-pic"
                    />
                    </div>
                    <div className="card-right">
                        <div className="card-header">
                            <div className="pseudo">
                                <h3>
                                {
                        !isEmpty(
                            userData[0] &&
                            userData.map((user) => {
                                if (user._id === post.posterId) return user.pseudo;
                            })
                            .join("")
                        )
                    }
                                </h3>
                                <div className="card-footer">
                                    <div className="comment-icon">
                                        <img src="./img/icons/message1.svg" alt="comment" />
                                        <span>{post.comments.length}</span>
                                    </div>
                                    <LikeButton post={post} />
                                    <img src="./img/icons/share.svg" alt="share" />
                                </div>
                            </div>
                        </div>
                    </div>
                    </>
            )}
        </li>
    );
                }



export default Card;