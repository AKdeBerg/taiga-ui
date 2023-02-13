import {InjectionToken} from '@angular/core';

export const TUI_DEPRECATED_ICONS = {
    tuiIconAttach: `tuiIconPaperclip`,
    tuiIconAttention: `tuiIconAlertCircle`,
    tuiIconBackCircle: `tuiIconArrowLeftCircle`,
    tuiIconCall: `tuiIconPhone`,
    tuiIconCallIn: `tuiIconPhoneIncoming`,
    tuiIconCallOut: `tuiIconPhoneOutgoing`,
    tuiIconCallTransfer: `tuiIconPhoneForwarded`,
    tuiIconCancel: `tuiIconXCircle`,
    tuiIconCancelCircle: `tuiIconSlash`,
    tuiIconCard: `tuiIconCreditCard`,
    tuiIconCards: `tuiIconCreditCard`,
    tuiIconChartBar: `tuiIconBarChart2`,
    tuiIconChart: `tuiIconBarChart`,
    tuiIconCheckList: `tuiIconClipboard`,
    tuiIconCloseCircle: `tuiIconXCircle`,
    tuiIconCollapse: `tuiIconMinimize2`,
    tuiIconComment: `tuiIconMessageSquare`,
    tuiIconCompany: `tuiIconBriefcase`,
    tuiIconDefaultDoc: `tuiIconFile`,
    tuiIconDesktop: `tuiIconMonitor`,
    tuiIconDislike: `tuiIconThumbsDown`,
    tuiIconDone: `tuiIconCheckCircle`,
    tuiIconDraft: `tuiIconEdit2`,
    tuiIconEyeOpen: `tuiIconEye`,
    tuiIconEyeClosed: `tuiIconEyeOff`,
    tuiIconExpand: `tuiIconMaximize2`,
    tuiIconExternal: `tuiIconExternalLink`,
    tuiIconFrame: `tuiIconLayout`,
    tuiIconGeo: `tuiIconMapPin`,
    tuiIconHeartFilled: `tuiIconHeart`,
    tuiIconHide: `tuiIconEyeOff`,
    tuiIconImg: `tuiIconImage`,
    tuiIconInfoCircle: `tuiIconInfo`,
    tuiIconLike: `tuiIconThumbsUp`,
    tuiIconLockOpen: `tuiIconUnlock`,
    tuiIconMobile: `tuiIconSmartphone`,
    tuiIconMoreHor: `tuiIconMoreHorizontal`,
    tuiIconMoreVer: `tuiIconMoreVertical`,
    tuiIconMoreVert: `tuiIconMoreVertical`,
    tuiIconPicture: `tuiIconImage`,
    tuiIconPin: `tuiIconMapPin`,
    tuiIconPrint: `tuiIconPrinter`,
    tuiIconRefresh: `tuiIconRefreshCw`,
    tuiIconRemove: `tuiIconX`,
    tuiIconShow: `tuiIconEye`,
    tuiIconSound: `tuiIconVolume2`,
    tuiIconSoundOff: `tuiIconVolumeX`,
    tuiIconStarFilled: `tuiIconStar`,
    tuiIconStop: `tuiIconSquare`,
    tuiIconStructure: `tuiIconGrid`,
    tuiIconTime: `tuiIconClock`,
    tuiIconTooltip: `tuiIconHelpCircle`,
    tuiIconViewList: `tuiIconList`,
    tuiIconWifiOn: `tuiIconWifi`,
};

export const TUI_SVG_DEPRECATED = new InjectionToken<Record<string, string>>(
    `[TUI_SVG_DEPRECATED]: Deprecated icons`,
    {
        factory: () => TUI_DEPRECATED_ICONS,
    },
);