export const Emojis = [
	"👾",
	"⭐",
	"🌟",
	"🎉",
	"🎊",
	"🎈",
	"🎁",
	"🎂",
	"🎄",
	"🎃",
	"🎗",
	"🎟",
	"🎫",
	"🎖",
	"🏆",
	"🏅",
	"🥇",
	"🥈",
	"🥉",
	"⚽",
	"🏀",
	"🏈",
	"⚾",
	"🎾",
	"🏐",
	"🏉",
	"🎱",
	"🏓",
	"🏸",
	"🥅",
	"🏒",
	"🏑",
	"🏏",
	"⛳",
	"🏹",
	"🎣",
	"🥊",
	"🥋",
	"🎽",
	"⛸",
	"🥌",
	"🛷",
	"🎿",
	"⛷",
	"🏂",
	"🏋️",
	"🤼",
	"🤸",
	"🤺",
	"⛹️",
	"🤾",
	"🏌️",
	"🏇",
	"🧘",
];

export const RandomEmojis = () => {
	return Emojis[Math.floor(Math.random() * Emojis.length)];
};