<script>
export default {
    beforeCreate() {
        this.$cookies.removeAll("login_cookie")
        this.$router.push("/");
        alert("ログアウトしました");
    }
}
</script>