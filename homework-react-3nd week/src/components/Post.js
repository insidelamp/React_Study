import React from "react";

import { Grid, Image, Text, Button } from "../elements";
import { actionCreators as postActions } from "../redux/modules/post";
import { useDispatch } from "react-redux";
import { history } from "../redux/configureStore";

const Post = (props) => {
  const dispatch = useDispatch();
  const deletePost = () => {
    dispatch(postActions.deletePostFB(props.id));
  };
  return (
    <React.Fragment>
      <Grid>
        <Grid is_flex padding="16px">
          <Grid is_flex width="auto">
            <Image shape="circle" src={props.src} />
            <Text bold>{props.user_info.user_name}</Text>
          </Grid>
          <Grid is_flex width="auto">
            <Text>{props.insert_dt}</Text>
            {props.is_me && (
              <Button
                width="auto"
                margin="4px"
                padding="4px"
                _onClick={() => {
                  history.push(`/write/${props.id}`);
                }}
              >
                수정
              </Button>
            )}
          </Grid>
          <Grid is_flex width="auto">
            {props.is_me && (
              <Button width="auto" padding="4px" _onClick={deletePost}>
                삭제
              </Button>
            )}
          </Grid>
        </Grid>
        {props.previewType === "type1" && (
          <Grid padding="16px" is_flex_L>
            <Grid>
              <Text>{props.contents}</Text>
            </Grid>
            <Grid>
              <Image shape="rectangle" src={props.image_url} />
            </Grid>
          </Grid>
        )}
        {props.previewType === "type2" && (
          <Grid padding="16px" is_flex_R>
            <Grid>
              <Text>{props.contents}</Text>
            </Grid>
            <Grid>
              <Image shape="rectangle" src={props.image_url} />
            </Grid>
          </Grid>
        )}
        {props.previewType === "type3" && (
          <Grid padding="16px" is_flex_W>
            <Grid>
              <Text>{props.contents}</Text>
            </Grid>
            <Grid>
              <Image shape="rectangle" src={props.image_url} />
            </Grid>
          </Grid>
        )}
        <Grid padding="16px">
          <Text margin="0px" bold>
            댓글 {props.comment_cnt}개
          </Text>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Post.defaultProps = {
  user_info: {
    user_name: "yarn",
    user_profile:
      "https://insidelamp.s3.ap-northeast-2.amazonaws.com/KakaoTalk_20220314_085335507.jpg",
  },
  image_url:
    "https://insidelamp.s3.ap-northeast-2.amazonaws.com/KakaoTalk_20220314_085335507.jpg",
  contents: "풍경",
  comment_cnt: 10,
  insert_dt: "2022-04-01 10:00:00",
  is_me: false,
};

export default Post;
