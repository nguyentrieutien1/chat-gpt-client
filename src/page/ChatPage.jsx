import React, { useState, useRef, useEffect, useContext } from "react";

import { IoSend } from "react-icons/io5";
import ChatMessage from "../components/message/ChatMessage";
import UserMessage from "../components/message/UserMessage";
import NewChat from "../components/message/NewChat";
import axios from "axios";
import localStorageHelper from "../helpers/localStorageHelper";
import LoadingMessage from "../components/loading/LoadingMessage";
import Prompt from "../components/message/Prompt";
import { TextHistoryContext } from "../components/ChatHistory/ItemHistory";
import { useMyContext } from "../components/provider/MyProvider";
import {getRandomQuestions} from "../helpers/getRandomQuestions"
export   const questions = [
  "What are the best practices for optimizing YouTube video titles and descriptions for SEO?",
  "How can you create engaging thumbnails that attract clicks?",
  "What tools can help in editing and enhancing YouTube videos?",
  "How often should you upload new content to maintain viewer interest and channel growth?",
  "What strategies can help increase your subscriber count?",
  "How can you effectively promote your YouTube channel on other social media platforms?",
  "How important are tags and keywords in YouTube videos?",
  "What is the best way to interact with your audience through comments and community posts?",
  "How can you collaborate with other YouTubers to grow your channel?",
  "What metrics should you track in YouTube Analytics to measure your channel's performance?",
  "What are some effective ways to increase your video's watch time?",
  "What are some common reasons for a drop in YouTube views, and how can you address them?",
  "How does YouTube's monetization process work, and what are the requirements?",
  "What are some ways to diversify your revenue streams on YouTube?",
  "How can you use YouTube ads to promote your channel and videos?",
  "What equipment is essential for starting a YouTube channel?",
  "How do you create a consistent brand identity on your YouTube channel?",
  "How can you use YouTube Live to interact with your audience in real-time?",
  "What are some strategies for making your videos more shareable?",
  "What are some best practices for running a successful YouTube ad campaign?",
  "How can you use YouTube Analytics to track the success of your ad campaigns?",
  "What are some strategies for targeting the right audience with your YouTube ads?",
  "How can you use YouTube to drive traffic to your website or online store?",
  "How can you optimize your video descriptions for better search rankings?",
  "What are some strategies for getting your videos to appear in YouTube's suggested videos?",
  "What are some tips for optimizing your YouTube channel page for SEO?",
  "How can you use playlists to boost your video's SEO?",
  "How can you use YouTube's search insights to find new content ideas?",
  "What are some common mistakes to avoid when optimizing your videos for SEO?",
  "What are some tips for maximizing your ad revenue on YouTube?",
  "What are some tips for creating viral content on YouTube?",
  "How can you use YouTube Shorts to attract new subscribers?",
  "How can you use graphic design tools to create engaging thumbnails?",
  "What are some current trends in YouTube content creation?",
  "How can you use YouTube's trending page to discover new content ideas?",
  "How can you use YouTube's search insights to identify trending keywords?",
  "What are some tips for creating a content calendar for your YouTube channel?",
  "What are the best practices for creating engaging TikTok videos?",
  "How can you optimize your TikTok profile to attract more followers?",
  "What are some tips for using popular TikTok trends to increase your visibility?",
  "How can you effectively use hashtags on TikTok to reach a wider audience?",
  "What are some strategies for creating viral TikTok content?",
  "How can you use TikTok's editing tools to enhance your videos?",
  "What are the best ways to use music and sound effects in your TikTok videos?",
  "How can you collaborate with other TikTok creators to grow your audience?",
  "What are some tips for creating high-quality TikTok videos with your phone?",
  "How can you use TikTok's analytics to track and improve your performance?",
  "How can businesses use TikTok to promote their products or services?",
  "What are some best practices for running a successful TikTok ad campaign?",
  "How can you use TikTok influencers to boost your brand's visibility?",
  "How can you use TikTok's ad platform to target the right audience?",
  "How can you use TikTok to drive traffic to your website or online store?",
  "What are some strategies for getting your first 1,000 followers on TikTok?",
  "How can you use TikTok challenges to grow your audience?",
  "What are some tips for increasing your TikTok video views and likes?",
  "How can you use TikTok's For You page to gain more visibility?",
  "What are some effective ways to promote your TikTok account on other social media platforms?",
  "What are some strategies for creating content that appeals to a global audience?",
  "How can you use TikTok's duet and stitch features to engage with other creators?",
  "What are some tips for creating consistent and high-quality content on TikTok?",
  "What are some current trends in TikTok content creation?",
  "What are some tips for creating engaging and interactive content on TikTok?",
  "How can you use TikTok Live to build a stronger connection with your audience?",
  "What are some tips for creating a content calendar for your TikTok account?",
  "How can you use TikTok's Q&A feature to gather feedback on your content ideas?",
  "What are some strategies for creating content that aligns with your brand's goals and values?",
  "What are the most important metrics to track in TikTok Analytics?",
  "What are some essential tools for editing and enhancing your TikTok videos?",
  "What are some tips for using TikTok's Creator Studio effectively?",
  "What are some best practices for using TikTok's live streaming tools?",
  "What are the requirements for joining TikTok's Creator Fund?",
  "How can you use TikTok's Live Gifts feature to monetize your live streams?",
  "How can you use affiliate marketing to monetize your TikTok videos?",
  "What are some strategies for getting brand sponsorships on TikTok?",
  "What are some tips for maximizing your ad revenue on TikTok?",
  "What are some tips for creating educational content on TikTok?",
  "How can you use TikTok to share behind-the-scenes content with your audience?",
  "What are some tips for creating storytelling content on TikTok?",
  "What are the best practices for creating engaging Facebook posts?",
  "How can you optimize your Facebook Page to attract more followers?",
  "What types of content tend to perform best on Facebook?",
  "How often should you post on Facebook to maintain engagement?",
  "What are some effective strategies for using Facebook Live?",
  "How can you use Facebook Stories to connect with your audience?",
  "How can you use Facebook Groups to build a community around your brand?",
  "What tools can help you schedule and manage your Facebook posts?",
  "How can you effectively use Facebook Insights to improve your content strategy?",
  "What are the key components of a successful Facebook ad campaign?",
  "How can you target the right audience for your Facebook ads?",
  "What are the different types of Facebook ads, and how do you choose the right one?",
  "How can you optimize your Facebook ads for higher conversions?",
  "What metrics should you track to measure the success of your Facebook ad campaigns?",
  "What are some common mistakes to avoid when creating Facebook ads?",
  "How can you retarget users who have interacted with your Facebook Page or website?",
  "How can you use Facebook Pixel to track conversions and optimize your ad campaigns?",
  "What are the best practices for setting up a Facebook Page for your business?",
  "How can you use Facebook's analytics tools to understand your audience and improve your strategy?",
  "What are the benefits of boosting posts on Facebook, and how do you do it?",
  "How can you use Facebook Messenger to provide customer support?",
  "What are some strategies for increasing organic reach on Facebook?",
  "What are the privacy settings on Facebook, and how can you use them to protect your information?",
  "How can you use Facebook's search features to find people, pages, and groups?",
  "How can you report inappropriate content or behavior on Facebook?",
  "How can you leverage Facebook's algorithm to increase the visibility of your posts?",
  "What are some advanced targeting options available in Facebook Ads Manager?",
  "What are the benefits of using video ads on Facebook, and how can you create them?",
  "What are some tips for optimizing your Facebook ads for mobile users?",
  "What are some strategies for reducing your Facebook ad costs while maintaining performance?",
  "What are some ways to measure and increase the return on investment (ROI) of your Facebook ads?",
  "How can you manage multiple Facebook Pages effectively?",
  "What are some tips for creating effective Facebook cover photos and profile pictures?",
  "How can you use Facebook to learn new skills or take online courses?",
  "What are the best practices for creating engaging Instagram posts?",
  "How can you optimize your Instagram profile to attract more followers?",
  "What types of content tend to perform best on Instagram?",
  "How often should you post on Instagram to maintain engagement?",
  "What are some effective strategies for using Instagram Stories?",
  "How can you use Instagram Reels to reach a wider audience?",
  "What are the best ways to promote your Instagram profile on other social media platforms?",
  "How can you use Instagram analytics to improve your content strategy?",
  "What tools can help you schedule and manage your Instagram posts?",
  "How can you effectively use hashtags to increase the visibility of your posts?",
  "What are the best practices for writing engaging tweets?",
  "How can you optimize your Twitter profile to attract more followers?",
  "What types of content tend to perform best on Twitter?",
  "How often should you tweet to maintain engagement?",
  "What are some effective strategies for using Twitter hashtags?",
  "How can you use Twitter analytics to track the performance of your tweets?",
  "What tools can help you schedule and manage your tweets",
];
const ChatPage = () => {
  const { chanelName, setChanelName  } = useMyContext();


  const [oldQuestion, setOldQuestion] = useState([]);

  const [countChar, setCountChar] = useState(0);
  const[isRandom, setIsRandom] = useState(false);
  const [value, setValue] = useState("");
  const [isBotAnswering, setIsBotAnswering] = useState(false);
  const handleChange = (e) => {
    setCountChar(e.target.value.length);
    setValue(e.target.value);
  };
  const [option, setOption] = useState("advance");

  const [conversions, setConversions] = useState([]);
  const messageContainer = useRef(null);

  useEffect(() => {

    setOldQuestion([...getRandomQuestions(questions)])
  }, [])

  useEffect(() => {
    const conversionsFromLocalStorage =
      localStorageHelper.localStorageHelper.getItem("conversions");
    setConversions([...conversionsFromLocalStorage]);
  }, []);

  useEffect(() => {
    const clearLocalStorageArray = () => {
      localStorage.setItem("conversions", JSON.stringify([]));
      console.log("Array cleared at:", new Date());
      setConversions([]);
    };
    // Đặt hàm này để chạy mỗi 30 phút
    const intervalId = setInterval(clearLocalStorageArray,  24 * 60 * 60 * 1000);

    // Làm sạch interval khi component unmount
    return () => clearInterval(intervalId);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      var link =
        " ";
      // if(localStorageHelper.localStorageHelper.getItem("link").length > 0) {
      //   link = `${localStorageHelper.localStorageHelper.getItem("link")}, `
      // }
      conversions.push({
        role: "user",
        parts: [{ text: value }],
      });

      setChanelName(conversions[0]?.parts[0]?.text || "");

      setConversions([...conversions]);
      scrollToBottomFunction();
      setValue("");
      setIsBotAnswering(true);
      const result = await axios.post(
        "https://namnguyenproduct.com/api/conversion",
        {
          data: link.concat(value).concat("lưu ý, nếu câu hỏi dạng danh sách thì bạn nhớ thêm mỗi dòng mỗi icon khác nhau dễ thương ở trước mỗi câu nhé"),
          history: conversions.map((con) => {
            return { role: con.role, parts: con.parts };
          }),
        }
      );

      if (result.status !== 201) return;

      const { metadata } = result?.data;

      const userConversions = {
        role: "user",
        parts: [{ text: value }],
      };

      const modelConversions = {
        role: "model",
        parts: [{ text: metadata || "Xin lỗi, tôi không thể trả lời" }],
      };

      conversions.splice(conversions.length - 1, 1);

      conversions.push(userConversions);

      conversions.push(modelConversions);

      setConversions([...conversions]);

      // scrollToBottomFunction();

      localStorageHelper.localStorageHelper.setItem("conversions", [
        ...conversions,
      ]);
      setIsBotAnswering(false);

      setOldQuestion([...getRandomQuestions(questions)])
    } finally {
      setIsBotAnswering(false);
    }
  };

  console.log(conversions);

  const scrollToBottomFunction = () => {
    setTimeout(() => {
      scrollToBottom();
    }, 500);
  };

  useEffect(() => {
    scrollToBottomFunction();
  }, []);

  const scrollToBottom = () => {
    const container = messageContainer.current;
    if (container) {
      container.scrollTo({
        top: container.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  const handleFavariteMessage = (index, isLike) => {
    conversions[index].isLike = isLike;

    setConversions([...conversions]);

    localStorageHelper.localStorageHelper.setItem("conversions", [
      ...conversions,
    ]);
  };

  console.log(oldQuestion);

  return (
    <div id="form_chat" className="relative h-full w-[90%] mx-auto">
      <div
        ref={messageContainer}
        className="h-chat-message pb-6"
        style={{ overflowY: "scroll" }}
      >
        {conversions.length > 0 ? (
          conversions.map((conversion, index) => {
            return (
              <React.Fragment key={index}>
                {conversion?.role == "user" ? (
                  <UserMessage message={conversion.parts[0].text} />
                ) : (
                  conversion.parts[0] && (
                    <ChatMessage
                      handleFavariteMessage={(isLike) =>
                        handleFavariteMessage(index, isLike)
                      }
                      isLike={conversion?.isLike}
                      message={conversion.parts[0]?.text.replace(/\*\*/g, "")}
                    />
                  )
                )}
              </React.Fragment>
            );
          })
        ) : (
          <>
            <NewChat option={option} setOption={setOption} />
          </>
        )}

        {isBotAnswering && <LoadingMessage isSuccess={isBotAnswering} />}
        {!isBotAnswering && (
          <Prompt oldQuestion={oldQuestion} isRandom={isRandom} handleReplaceValue={(text) => setValue(text)} />
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <form
          onSubmit={handleSubmit}
          className="relative pt-3 bg-[#121521] w-full"
        >
          <input
            max={500}
            className="bg-[#222838] text-white font-medium py-4 pl-4 pr-28 rounded-lg w-full border-[0.5px] border-[#222838] hover:border-gray-200 outline-1 outline-[#222838] focus:outline-blue-500 transition-all"
            value={value}
            onChange={handleChange}
            placeholder={"Ask me anything..."}
            type="text"
          />
          <div
            onClick={handleSubmit}
            className="hover:cursor-pointer absolute top-1/2 -translate-y-1/2 right-4 flex items-center gap-2 mt-2 bg-[#139DFF] hover:bg-[#005CE6] transition-all px-3 py-1 rounded-full"
          >
            <IoSend size={12} className="text-white" />
            <p className="font-medium text-white text-[16px]">Send</p>
          </div>
        </form>

        <p className="text-right mt-1 text-white text-lg">
          {value.length} /500
        </p>
        {/* <p className="text-center text-lg font-normal text-[#BBBCC1] mt-2">
          Please be aware that this is an alpha version of the AI, and as such
          it may not always behave as expected. Use it at your own risk.
        </p> */}
      </div>
    </div>
  );
};

export default ChatPage;
