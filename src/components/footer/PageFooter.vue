<template>
	<div id="pageFooter">
		<div class="page-footer-content">
			<el-row class="website-info">
				<el-col :span="16">
					<div class="footer-item1">
						<div class="item-header">叶静爱运动</div>
						<div class="item-content">
							<div>大家好，我是写代码两年半的思域哥</div>
						</div>
					</div>
				</el-col>
				<el-col :span="4">
					<div class="footer-item1">
						<div class="item-header">帮助</div>
						<div class="item-content">
							<div @click="helpU()">这里帮助信息？</div>
						</div>
					</div>
				</el-col>
				<el-col :span="4">
					<div class="footer-item1">
						<div class="item-header">关于我们</div>
						<div class="item-content">
							<ul>
								<li>篮球小组长：思域哥哥</li> 
							</ul>
						</div>
					</div>
				</el-col>
			</el-row>
			<el-row class="other-info">
				<el-col :span="6">
					<!-- 这里做分享网站的链接 -->
					<div class="footer-item2">
						<div>
							<font-awesome-icon @click="shareLink('qq：2624902083')" :icon="['fab','qq']" class="brand-logo" />
							<font-awesome-icon @click="shareLink('wx:Poundba_Yuu')" :icon="['fab','weixin']" class="brand-logo" />
						</div>
					</div>
				</el-col>
				<el-col :span="12" class="footer-icp">这里是icp备案</el-col>
				<el-col :span="6"></el-col>
			</el-row>
		</div>
	</div>
</template>

<script>
export default {
	name: "PageFooter",
	methods: {
		shareLink(type) {
			this.$message({
            type: "success",
            message: `小组长${type}`,
          }); 
		},
		helpU(){
			this.$message({
            type: "success",
            message: `多大人了还要帮助？`,
          }); 
		}
	}
};
</script>

<style scoped>
#pageFooter {
	width: 100%;
	background-color: #ebedf2;
	display: flex;
	justify-content: center;
}
.page-footer-content {
    max-width: 1400px;
    width: 80%;
}
/* 底栏第一行：网站信息 */
.website-info {
	padding: 52px 0 86px 0;
	border-bottom: 2px solid #dcdfe6;
}
/* 条目内容1*/
.footer-item1 .item-header {
	display: flex;
	align-items: center;
	color: #656b7b;
	font-size: 12px;
	font-weight: 500;
	height: 40px;
	width: 100%;
	padding: 12px 0;
}
.footer-item1 .item-content {
	font-size: 14px;
	color: #656b7b;
	font-weight: 400;
}
.footer-item1 .item-content ul li {
	list-style: none;
}

/* 底栏第二行：其他信息 */
.other-info {
	display: flex;
	align-items: center;
	padding: 32px 0px;
	font-size: 12px;
	color: #656b7b;
	letter-spacing: 1px;
}
/* icp备案信息 */
.footer-icp {
	display: flex;
	justify-content: center;
}
.brand-logo {
	font-size: 19px;
    margin-right: 32px;
    cursor: pointer;
}
</style>