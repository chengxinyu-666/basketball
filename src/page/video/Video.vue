<template>
    <div id="video">
        <div style="width: 85%; max-width: 500px; margin: 0 30px;">
            <br>
            <h3 style="word-break: break-all;">{{ videoInfo.name }}</h3>
            <br>
            <video-player class="video-player-box"
                          ref="videoPlayer"
                          :options="playerOptions"
                          :playsinline="true"
                          @play="onPlayerPlay($event)"
                          @pause="onPlayerPause($event)"
                          style="width: 100%;"
            >
            </video-player>
            <br>
            <div>
                <svg class="icon" aria-hidden="true" @click="videoLike" style="margin-right: 50px;">
                    <use v-if="videoInfo.isLiked" xlink:href="#icon-like2"/>
                    <use v-else xlink:href="#icon-like1"/>
                </svg>
                <svg class="icon" aria-hidden="true" @click="videoMark" style="margin-right: 50px;">
                    <use v-if="videoInfo.isMarked" xlink:href="#icon-mark2"/>
                    <use v-else xlink:href="#icon-mark1"/>
                </svg>
                <span v-clipboard:copy="page.url">
                    <svg class="icon" aria-hidden="true" @click="videoShare">
                        <use xlink:href="#icon-share"/>
                    </svg>
                </span>
            </div>
            <br>
            <p style="font-size: 14px;">{{ videoInfo.introduction }}</p>
            <br>
        </div>
        <div style="width: 85%; max-width: 500px;">
            <br>
            <div style="font-size: 20px;">评论</div>
            <el-input  v-model="comment.content" type="textarea" resize="none" :autosize="{ minRows: 1, maxRows: 3 }" style="width: 80%;resize: none;font-size: 15px;"/>
            <el-button type="primary" size="medium" round @click="videoComment">发表</el-button>
            <el-divider />
            <div class="infinite-list" v-infinite-scroll="videoCommentGetMore" style="overflow: auto; height: 400px; padding: 0 2px;">
                <div v-for="(v, k) in videoInfo.comments" :key="'comment' + k">
                    <el-row>
                        <el-col :span="12" style="font-size: 18px;">
                            <div class="nav-user">
                                <img class="user-head" src="@/assets/image/default_head.jpg" />
                                {{ v.userName }}
                            </div>
                        </el-col>
                        <el-col :span="12" style="text-align: right; font-size: 14px; font-style: italic">{{ v.time }}</el-col>
                    </el-row>
                    <br>
                    <el-row style="font-size: 15px;">
                        {{ v.content }}
                    </el-row>
                    <el-divider />
                </div>
                <div>
                    {{ isVideoCommentEnd ? '到底啦～' : '下拉加载更多'}}
                </div>
                <br>
            </div>
            <br>
        </div>
    </div>
</template>

<script>
    import 'video.js/dist/video-js.css'
    import { videoPlayer } from 'vue-video-player'
    import './icon/iconfont'
    export default {
        components: {
            videoPlayer
        },
        data() {
            return {
                page: {
                    url: window.location.href,
                },
                isVideoCommentEnd: false,
                playerOptions: {
                    muted: true,
                    language: 'zh-CN',
                    playbackRates: [0.25, 0.5, 1.0, 1.25, 2.0],
                    fluid: true,
                    sources: [{
                        type: "video/mp4",
                        // src: "https://www.w3school.com.cn/i/movie.mp4"
                    src:'https://e22c0f7fe3741058.jomoxc.com:9082/fs3c4a7504.a.bdydns.com/2513265565/mda-khtu0x93sb3bzdne/hd/mda-khtu0x93sb3bzdne.mp4?bcevod_channel=searchbox_feed&pt=3&klogid=0969055534&max_age=2592000&xauzkey=mngx_82fcd1f6f0326a9d4201dff21d5f02ff_1679980596&v_from_s=hkapp-haokan-nanjing&abtest=107354_2-107353_1&r=K0xGOwlWVUYVIk0bGA47ECJMWyhUDxUETCseVFcBIBA2CEpySR8YWgE8HlsfRSAAbFVWKlcHEh0WdgIMSRkqVyFCViUfQhcZV3kMahwYJwkcSw8jEQ0KGU4uG1oRCyZJLVlcIRMCHU8CMw5dJQEtHX4JBHxDVENcWnBDGEpHeEl2DlcuTlocXAZwQgBJCSxTIlwHe08KQl4BdB4ESFt4BmVaUS4MAx42AC4bWxQPJFkwXVM5GQQYBhsZHFAfDm4UJwUDbRkIR1lFNg4ISUwkCyRRVnZKVUxQU3NPAElebhIqXA99SFhIX1ZyQgxOXn9TdAADck5dXAgBMh9GDld5VHQLB38lXldYU3FJAEk1eUIoVF0sEwhHWVpwQwVPX31Xdx5BLxEzAgoHKEcELEhXJRkIFFgMNh9bGQ4mVQ%3D%3D&cd=0&pd=1&xcid=35019bc69bde4e61b12e59c92c58bb24&sdk_xcdn=1&xcsched=1365488758&xclogid=11770177152772086497&vid=6242654894477781941&f_ver=v1&auth_key=1679895969-0-0-56ee46f5e6853cd7ad505f87b2d1210b&limit_rate=3670016&logid=0969055534'
                   }],
                },
                videoInfo: {
                    id: null,
                    name: 'test video',
                    introduction: '打篮球打篮球',
                    isLiked: false,
                    isMarked: false,
                    comments: [
                        {
                            userName: '运动员1',
                            userHead: '',
                            time: '2020-01-01',
                            content: '6666'
                        },
                        {
                            userName: '运动员2',
                            userHead: '',
                            time: '2020-02-01',
                            content: '6'
                        },
                    ]
                },
                comment: {
                    userName: 'a',
                    userHead: '',
                    time: '2020-01-01',
                    content: '32131'
                }
            }
        },
        created() {
            this.videoInfo.id = this.$route.path.substring(this.$route.path.lastIndexOf('/') + 1);
            this.initPlayer();
        },
        mounted() {
            console.log('player: mounted', this.player);
        },
        computed: {
            player() {
                return this.$refs.videoPlayer.player
            }
        },
        methods: {
            initPlayer() {

            },
            videoLike() {
                this.videoInfo.isLiked = !this.videoInfo.isLiked
            },
            videoMark() {
                this.videoInfo.isMarked=!this.videoInfo.isMarked
            },
            videoShare() {
                this.$message.success({ message: '已复制链接', duration:1500 });
            },
            videoComment() {
                if (this.comment.content.length === 0) {
                    this.$message.warning({ message: '评论不能为空', duration:1500 });
                    return;
                }
                this.comment.content = '';
            },
            videoCommentGetMore() {
                if (this.videoInfo.comments.length > 10) {
                    this.isVideoCommentEnd = true;
                    return;
                }
                this.videoInfo.comments.push({
                    userName: '篮球哥',
                    time: '2023-02-05',
                    content: 'adsa'
                })
            },
            onPlayerPlay(player) {
                console.log('player: play', player)
            },
            onPlayerPause(player) {
                console.log('player: pause', player)
            },

        }
    }
</script>

<style scoped>
#video{
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow:row wrap;
}
.icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
    cursor: pointer;
    font-size: 30px;
    color: #1b61a9;
}
.nav-user {
    display: flex;
    align-items: center;
}
.user-head {
    height: 32px;
    width: 32px;
    border-radius: 45%;
    cursor: pointer;
    border: 1px solid #dedede;
    margin-right: 10px;
}
</style>