import React from "react";
import { Grid, Text, Image } from "../elements";

const Notification = (props) => {
  let noti = [
    {
      user_name: "aaaaa",
      post_id: "post1",
      image_url: "",
    },
    {
      user_name: "aaaaa",
      post_id: "post2",
      image_url: "",
    },
    {
      user_name: "aaaaa",
      post_id: "post3",
      image_url: "",
    },
    {
      user_name: "aaaaa",
      post_id: "post4",
      image_url: "",
    },
    {
      user_name: "aaaaa",
      post_id: "post4",
      image_url: "",
    },
    {
      user_name: "aaaaa",
      post_id: "post5",
      image_url: "",
    },
    {
      user_name: "aaaaa",
      post_id: "post6",
      image_url: "",
    },
  ];
  return (
    <React.Fragment>
      <Grid padding="16px" bg="#EFF6FF">
        {noti.map((n) => {
          return (
            <Grid padding="16px" is_flex bg="#ffffff">
              <Grid width="auto" margin="0px 8px 0px 0px">
                <Image />
              </Grid>
              <Grid>
                <Text>
                  <b>{n.user_name}</b>님이 게시글에 댓글을 남겼습니다!
                </Text>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </React.Fragment>
  );
};
