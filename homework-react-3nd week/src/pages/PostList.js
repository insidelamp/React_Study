// PostList.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid } from "../elements";

import Post from "../components/Post";
import { actionCreators as postActions } from "../redux/modules/post";
import InfinityScroll from "../shared/infinityScroll";

const PostList = (props) => {
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post.list);
  const user_info = useSelector((state) => state.user.user);
  const is_loading = useSelector((state) => state.post.is_loading);
  const paging = useSelector((state) => state.post.paging);
  const { history } = props;

  React.useEffect(() => {
    if (post_list.length === 0) {
      dispatch(postActions.getPostFB());
    }
  }, []);

  return (
    <React.Fragment>
      <Grid bg={"#EFF6FF"} padding="20px 0px">
        <InfinityScroll
          callNext={() => {
            dispatch(postActions.getPostFB(paging.next));
          }}
          is_next={paging.next ? true : false}
          loading={is_loading}
        >
          {post_list.map((p, idx) => {
            const isMe = p.user_info.user_id === user_info?.uid;
            if (p.previewType === "type1") {
              return (
                <Grid
                  bg={isMe ? "#ffffff" : undefined}
                  margin={isMe ? "8px 0px" : undefined}
                  key={p.id}
                  _onClick={() => {
                    history.push(`/post/${p.id}`);
                  }}
                >
                  <Post {...p} is_me={isMe} />
                </Grid>
              );
            }
            if (p.previewType === "type2") {
              return (
                <Grid
                  bg={isMe ? "#ffffff" : undefined}
                  margin={isMe ? "8px 0px" : undefined}
                  key={p.id}
                  _onClick={() => {
                    history.push(`/post/${p.id}`);
                  }}
                >
                  <Post {...p} is_me={isMe} />
                </Grid>
              );
            }
            return (
              <Grid
                bg={isMe ? "#ffffff" : undefined}
                margin={isMe ? "8px 0px" : undefined}
                key={p.id}
                _onClick={() => {
                  history.push(`/post/${p.id}`);
                }}
              >
                <Post {...p} is_me={isMe} />
              </Grid>
            );
          })}
        </InfinityScroll>
      </Grid>
    </React.Fragment>
  );
};

export default PostList;
