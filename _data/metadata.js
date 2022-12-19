let data = {
	username: "adamwulf", // No leading @ here
	homeLabel: "adamwulf.me",
	homeUrl: "https://adamwulf.me/",
};

data.avatar = `https://v1.indieweb-avatar.11ty.dev/${encodeURIComponent(data.homeUrl)}/`;

module.exports = data;
