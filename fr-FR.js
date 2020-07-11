let lang = `fr-FR`;

let c = require(`../config.js`);
let e = c.emojis;

module.exports = class {
    constructor() {
        this.language = {
            UTILS: {
                ERROR_TITLE: `ERREUR`,
				ERROR_MESSAGE: `${e.servererror} Une erreur interne est survenue, veuillez réessayer ultérieurement.`,
				ERROR: (error) => `Voici le code d'erreur, merci de la reporter a l'équipe du staff du bot.\n\`\`\`${error}\`\`\``,
				NO_ENABLED: `${e.error} Désolé cette commande n'est pas disponible maintenant, rééssayez plus tard.`,
				STAFF_ONLY: `${e.error} Désolé cette commande est reservé a l'équipe du staff du bot.`,
				OWNER_ONLY: `${e.error} Désolé cette commande est réservé au propriétaire du serveur.`,
                NSFW: `${e.error} Désolé mais ceci est une commande de contenu NSFW, elle doit donc être effectuée dans un canal NSFW.`,
                NO_PERMISSION_CLIENT: (permission) => `${e.error} Je n'ai pas la/les permission(s) suivantes : \n\`\`${permission}\`\``,
                NO_PERMISSION_USER: (permission) => `${e.error} Vous n'avez pas la/les permission(s) suivantes : \n\`\`${permission}\`\``,
                NO_GUILD_PREMIUM: `${e.error} Désolé, cette commande est uniquement pour les serveurs premium.`,
				NO_PREMIUM_HOW_TO: `Pour avoir le premium...`,
				NOT_FOUND: `${e.error} Désolé, cette commande n'existe pas.`,
				SLOWMODE: (slowmode, command) => `${e.time} Vous devez patienter ${slowmode} seconde(s) avant de pouvoir éxécuter la commande \`\`${command}\`\` de nouveau.`,
				ENABLED: `${e.success} Activé`,
				DISABLED: `${e.error} Désactivé`,
				NOT_DEFINED: `${e.error} Non défini`,
				NONE: `${e.error} Aucun`,
				DEFAULT_PREFIX: (prefix) => `Hey, mon prefix sur ce serveur est \`\`${prefix}\`\``
			},
			EVENTS: {
				CHANNEL_CREATE: ``,
				CHANNEL_DELETE: ``,
				CHANNEL_UPDATE: ``,
				EMOJI_CREATE: ``,
				EMOJI_DELETE: ``,
				EMOJI_UPDATE: ``,
				GUILD_CREATE: ``,
				GUILD_DELETE: ``,
				GUILD_MEMBER_ADD: ``,
				GUILD_MEMBER_REMOVE: ``,
				GUILD_MEMBER_UPDATE: ``,
				GUILD_UPDATE: ``,
				INVITE_CREATE: ``,
				INVITE_DELETE: ``,
				MESSAGE_DELETE: ``,
				MESSAGE_UPDATE: ``,
				ROLE_CREATE: ``,
				ROLE_DELETE: ``,
				ROLE_UPDATE: ``,

			},
			HELP: {
				DESCRIPTION: `Permet d'obtenir la page d'aide du bot et une aide pour les commandes`,
        		USAGE: `$help`,
        		EXAMPLES: `$help`,
				HEADINGS: [
					`Aide pour la commande : `,
					`${e.desc2} Description :`,
					`${e.folder} Categorie :`,
					`${e.help} Usage :`,
					`${e.search} Exemples :`,
					`${e.add} Alias :`,
					`${e.crown} Permissions :`,
					`Bot`,
					`Utilisateur`,
					`Voici la liste des commandes disponibles :`,
				],
				FOOTER: (username) => `${username} | Version : ${c.version}`,
			},
			CATEGORIES: {
				ADMINSTRATION: `Administartion`,
				MODERATION: `Modération`,
				BOT: `Infos du bot`,
				CONFIGURATION: `Configuration`,
				INVITES: `Invitation`,
				MANAGEMENT: `Gestion`,
				STAFF: `STAFF`,
			},
			ADDBOT: {
				DESCRIPTION: `Permet d'obtenir le lien d'invitation du bot.`,
        		USAGE: `$addbot`,
        		EXAMPLES: `$addbot`,
        		TITLE: `Voici les liens pour inviter notre chère Amandine.`,
        		CLICK: `Cliquez ici.`,
        		NO_PERM: `Aucune permissions.`,
        		MEMBER_PERM: `Permissions Membre.`,
        		MOD_PERM: `Permissions Modération.`,
        		ADMIN_PERM: `Permissions Administration.`,
			},
			BOTINFOS: {
				DESCRIPTION: `Affiche les informations sur le bot.`,
        		USAGE: `$botinfos`,
        		EXAMPLES: `$botinfos`,
				TITLE: (botname) => `**__Statistique d'${botname}__**`,
				OWNER: `${e.crown} | Propriétaire`,
				VERSION: `${e.bot} | Version du bot`,
				DATE: `${e.calendar} | Date de création`,
				USERS: `${e.users} | Utilisateurs`,
				GUILDS: `${e.server} | Serveurs`,
				CHANNELS: `${e.channels} | Canaux`,
				PING: `${e.latency} | Latence`,
				RAM: `${e.ram} | Mémoire vive`,
				UPTIME: `${e.time} | Temp depuis le dernier redémarrage`,
				CURRENT: `_Actuel`,
			},
			MYCOLOR: {
				DESCRIPTION: `Permet de choisir la couleur des embeds du bot.`,
				USAGE: `$mycolor <couleur hexadecimale>`,
				EXAMPLES: `$mycolor #FFFFFF\n$mycolor reset`,
        		RESET: `${e.success} Votre couleur a bien été réinitialisé sur \`\`Aléatoire\`\`.`,
        		MOREINFOS: `Cliquez ici pour plus d'infos.`,
        		NO_ARGS: `${e.error} Merci de spécifier une couleur hexadécimale.`,
        		NO_HEX: `${e.error} Ce n'est pas une couleur hexadécimale valide.`,
        		SUCCESS: (color) => `${e.success} Votre couleur a bien ete changée en \`\`${color}\`\``,
			},
            PING: {
                DESCRIPTION: `Permet de voir la latence du bot et de l'API de discord.`,
				USAGE: `$ping`,
				EXAMPLES: `$ping`,
				FETCHING: `${e.loading} Calcul en cours...`,
				SLOW: `Le bot est lent.`,
                FAST: `Le bot est rapide.`,
				PING: (api, bot, hint) => `${e.server} API : ***${api}*** ms\n${e.bot} BOT : ***${bot}*** ms\n\n${hint}` //\n:rofl: Base de données : ${db}
			},
			INFOCONFIG: {
				DESCRIPTION: `Permet de voir la configuration actuelle des paramètres du bot pour le serveur.`,
				USAGE: `{prefixes}configuration [logs]`,
				EXAMPLES: ``,
        		TITLE_BASE: `**Voici les paramètres principaux du serveur.**`,
        		PREFIX: `**Préfix :**`,
        		LANG: `**Langue :**`,
        		JOIN_MSG_STATE: `**État du message de bienvenue :**`,
        		LEAVE_MSG_STATE: `**État du message de départ :**`,
        		NO_CHANNEL: `Le canal n'est pas configuré ou est invalide.`,
        		NO_MESSAGE: `Le message n'est pas configuré`,
        		JOIN_CHANNEL: `**Canal de bienvenue :**`,
        		LEAVE_CHANNEL: `**Canal de départ :**`,
        		JOIN_MSG: `**Message de bienvenue :**`,
        		LEAVE_MSG: `**Message de départ :**`,
        		LOGS_LIST: `**Voici les paramètres des logs du serveur.**`,
        		LOGS_STATE: `**État des logs :**`,
        		LOGS_CHANNEL: `**Canal de logs :**`,
        		NO_LOGS_CHANNEL: `Le canal n'est pas configuré ou est invalide.`,
        		LOGS_TIP: `Détails des logs \"{prefixes}configuration logs\"`,
        		LOGS_DETAILS: `Liste détaillée des logs.`,
			},
			LOGGING: {
				DESCRIPTION: `Permet de définir quels logs vous voulez activer ou non.`,
				USAGE: `$logging <paramètre> <on/off>`,
				EXAMPLES: `$logging messageUpdate on\n$logging guildUpdate off\n$logging all on\n$logging channel #canal\n$logging off`,
				LIST: `**Voici la liste des logs configurables.**`,
				NO_PARAM: `${e.error} Merci de spécifier un log a configurer.`,
				NO_STATUS: `${e.error} Merci de spécifier un status : on/off.`,
				INVALID: `${e.error} Ce log est inavlide.`,
				ALREADY_ENABLED: `${e.error} Ce log est déjà activé.`,
				LOG_ENABLED: (log) => `${e.success} Le log ${log} a bien été activé.`,
				ALREADY_DISABLED: `${e.error} Ce log est déjà désactivé.`,
				LOG_DISABLED: (log) => `${e.success} Le log ${log} a bien été activé.`,
				ALL_ENABLED: `${e.success} Tout les logs ont bien été activés.`,
				ALL_DISABLED: `${e.success} Tout les logs ont bien été désactivés.`,
				ENABLED: `${e.success} Les logs on bien été activés.`,
				DIASBLED: `${e.success} Les logs ont bien été désactivé.`,
				INVALID_CHANNEL: `${e.error} Merci de spécifier un canal valide sur le serveur.`,
				SUCCESS_CHANNEL: `${e.success} Le canal de logs a bien été configuré`,
				INVALID_OR_NULL_CHANNEL: `${e.error} Merci de vérifier que vous avez bien configuré un canal de logs ou que celui que vous avez configuré est valide avant d'activer les logs.`,
				NO_PERM: `${e.error} Merci de me donner la permission d'envoyer des message dans ce canal ou d'en spécifier un autre.`
			},
			CONFIGURATION: {
				DESCRIPTION: `Permet de voir la configuration actuelle sur le serveur.`,
				USAGE: `$configuration <option>`,
				EXAMPLES: `$configuration\n$configuration logs`,
				LOG_TITLE: `Voici la configuration des logs sur ce serveur.`,
				LOG_STATUS: `État des logs :`,
				LOG_CHANNEL: `Canal de log :`,
				LOG_ACTIVE: `Logs activés :`,
				LOG_INACTIVE: `Logs désactivés`,
				INFO: `Voici la configuration actuelle du serveur`,
				PREFIX: `Préfixe`,
				LANG: `Langue`,
				CLEANIFY: `Mode propreté`,
				JOINMSGISON: `État du message de bienvenue`,
				LEAVEMSGISON: `État du message d'au revoir`,
				JOINCHANNEL: `Canal de bienvenue`,
				LEAVECHANNEL: `Canal d'au revoir`,
				JOINMSG: `Message de bienvenue`,
				LEAVEMSG: `Message d'au revoir`,
			},
			BACKUP: {
				DESCRIPTION: `Permet de créer des sauvegarde de vos serveurs.`,
				USAGE: `$backup <option> [nom]`,
				EXAMPLES: `$backup create nom\n$backup load nom\n$backup infos nom\n$backup remove nom\n$backup list`,
				USER_LIMIT_REACHED: `${e.success} Vous avez atteint la limite de sauvegardes en tant qu'utilisateur. Pour en obtenir plus merci de vous rendre sur le dashboard pour souscrire a un abonnement premium.`,
				PRIME_LIMIT_REACHED: `${e.success} Vous avez atteint la limite maximale de sauvegardes, vous pouvez toujours en demander quelques-une de plus sur le serveur de support.`,
				NO_NAME: `${e.error} Merci de spécifier un nom pour la sauvegarde.`,
				ENTRY_ALREADY_EXIST: `${e.success} Il y a déjà une sauvegarde enregistrée avec ce nom.`,
				NO_ENTRY: `${e.error} Il n'y a aucune sauvegarde enregistrée avec ce nom.`,
				START_BACKUP_SAVE: `${e.loading} La sauvegarde a commencé, merci de patienter.`,
				BACKUP_SAVE_DONE: `${e.success} La sauvegarde est terminée. Vous pouvez maintenant la charger la ou vous voulez.`,
				ROLE_NOT_HIGHEST: `${e.success} Merci de vérifier que mon rôle est tout en haut de liste et que j'ai permissions maximale pour pouvoir charger la sauvegarde.`,
				START_BACKUP_LOAD_CONFIRM: `Merci de confirmer que vous êtes sûr de vouloir charger la sauvegarde, tout sera suprimmé du serveur. Tapez \`\`-confirm\`\` pour confirmer ou \`\`cancel\`\` pour annuler.`,
				START_BACKUP_LOAD: `${e.loading} La sauvegarde est en cours d'installation sur le serveur.`,
				BACKUP_LOAD_CANCEL: `${e.error} L'installation de la sauvegarde a été annulée.`,
				BACKUP_LOAD_DONE: `${e.success} La sauvegarde a bien été installée, profitez bien de votre serveur tout neuf.`,
				LOAD_TIMEOUT: `${e.time} Le temp est écoulé, vous n'avez pas validé que vous vouliez charger la sauvegarde.`,
				INFOS_TITLE: `Informations sur la sauvegarde.`,
				INFOS_NAME: `Nom :`,
				INFOS_ID: `ID :`,
				INFOS_SERVER_NAME: `Nom du serveur :`,
				INFOS_SERVER_ID: `ID du serveur :`,
				INFOS_SIZE: `Taille :`,
				INFOS_DATE: `Date de création :`,
				BACKUP_DELETE_CONFIRM: `${e.loading} Merci de confirmer que vous êtes sûr de vouloir suprimmer la sauvegarde. Tapez \`\`-confirm\`\` pour confirmer ou \`\`cancel\`\` pour annuler.`,
				BACKUP_DELETE_CANCEL: `${e.error} La supression de la sauvegarde a été annulée.`,
				BACKUP_DELETE_DONE: `${e.success} La sauvegarde a bien été suprimmée.`,
				DELETE_TIMEOUT: `${e.time} Le temp est écoulé, vous n'avez pas validé que vous vouliez suprimmer la sauvegarde.`,
				NO_BACKUPS: `${e.error} Vous n'avez encore aucune sauvegardes de serveurs.`,
				LIST: `Voici la liste de vos sauvegardes :`,
				NO_ACTION: `${e.error} Merci de spécifier une action: create, load, infos, remove, list.`,
			},
			JOINMSG: {
				DESCRIPTION: `Permet de configurer le message et canal de bienvenue du serveur.`,
				USAGE: `$setjoin <option> <argument> `,
				EXAMPLES: `$setjoin on\n$setjoin off\n$setjoin reset\n$setjoin channel <mention>\n$setjoin message <message>\n$setjoin options`,
				OPTIONS_TITLE: `Voici les paramètres disponibles pour le message de bienvenue.`,
				OPTIONS: `{user}-La mention de l'utilisateur\n{user.name}-Le nom de l'utilisateur\n{user.tag}-Le nom+tag de l'utilisateur\n{user.createdat}-La date de création du compte de l'utilisateur\n{user.id}-L'id de l'utilisateur\n{guild}-Le nom du serveur\n{guild.count}-Le nombre de membres sur le serveur\n{inviter}-La mention de l'utilisateur qui l'a invité\n{inviter.tag}-Le nom+tag de l'utilisateur qui l'a invité\n{inviter.name}-Le nom de l'utilisateur qui l'a invité\n{inviter.id}-L'id de l'utilisateur qui l'a invité\n{inviter.invites}-Le nombre d'invitations de l'utilisateur qui l'a invité\n{invite.code}-Le code de l'invitation utilisée\n{invite.uses}-Le nombre d'utilisation de l'invitation\n{invite.url}-L'URL de l'invitation`,
				ALREADY_ENABLED: `${e.success} Le message de bienvenue est déjà activé.`,
				CHANNEL_NOT_SET: `${e.error} Impossible d'activer le message de bienvenue tant que le canal de bienvenue n'est pas configuré ou invalide.`,
				MESSAGE_NOT_SET: `${e.error} Impossible d'activer le message de bienvenue tant que le message n'est pas configuré.`,
				ENABLED: `${e.success} Le message de bienvenue a bien été activé.`,
				DISABLED: `${e.success} Le message de bienvenue a bien été désactivé.`,
				ALREADY_DISABLED: `${e.success} Le message de bienvenue est déjà désactivé.`,
				CONFIRM_RESET: `${e.loading} Merci de confirmer que vous êtes sûr de vouloir réinitialiser la configuration du message de bienvenue. Tapez \`\`-confirm\`\` pour confirmer ou \`\`cancel\`\` pour annuler.`,
				CANCELLED: `${e.success} La réinitialisation de la configuration du message de bienvenue a été annulée.`,
				RESET_SUCCESS: `${e.success} La configuration du message de bienvenue a bien été réinitilisée.`,
				TIMEOUT: `${e.time} Le temp est écoulé, vous n'avez pas validé que vous vouliez réinitialiser la configuration du message de bienvenue.`,
				NO_MENTION: `${e.error} Merci de mentionner un canal.`,
				CHANNEL_SUCCESS: `${e.success} Le canal de bienvenue a bien été configuré.`,
				NO_ARGS_MESSAGE: (prefix) => `${e.error} Merci de spécifier un message. Vous pouvez trouver les paramètres disponibles avec ${prefix}setjoin options.`,
				NON_EXISTENT_CHANNEL: `${e.error} Impossible de configurer le message de bienvenue tant que le canal de bienvenue n'est pas configuré ou invalide.`,
				TOO_LONG: `${e.error} Votre message de bienvenue est trop long, il ne doit pas dépasser 1000 caractères.`,
				MESSAGE_SUCCESS: `${e.success} Le message de bienvenue a bien été configuré.`,
				NO_ARGS: `${e.error} Merci de spécifier une action: on, off, reset, channel, message, options.`,
			},
			LEAVEMSG: {
				DESCRIPTION: `Permet de configurer le message et canal d'au revoir du serveur.`,
				USAGE: `$setleave <option> <argument> `,
				EXAMPLES: `$setleave on\n$setleave off\n$setleave reset\n$setleave channel <mention>\n$setleave message <message>\n$setleave options`,
				OPTIONS_TITLE: `Voici les paramètres disponibles pour le message d'au revoir.`,
				OPTIONS: `{user}-La mention de l'utilisateur\n{user.name}-Le nom de l'utilisateur\n{user.tag}-Le nom+tag de l'utilisateur\n{user.createdat}-La date de création du compte de l'utilisateur\n{user.id}-L'id de l'utilisateur\n{guild}-Le nom du serveur\n{guild.count}-Le nombre de membres sur le serveur\n{inviter}-La mention de l'utilisateur qui l'a invité\n{inviter.tag}-Le nom+tag de l'utilisateur qui l'a invité\n{inviter.name}-Le nom de l'utilisateur qui l'a invité\n{inviter.id}-L'id de l'utilisateur qui l'a invité\n{inviter.invites}-Le nombre d'invitations de l'utilisateur qui l'a invité\n{invite.code}-Le code de l'invitation utilisée\n{invite.uses}-Le nombre d'utilisation de l'invitation\n{invite.url}-L'URL de l'invitation`,
				ALREADY_ENABLED: `${e.success} Le message d'au revoir est déjà activé.`,
				CHANNEL_NOT_SET: `${e.error} Impossible d'activer le message d'au revoir tant que le canal d'au revoir n'est pas configuré ou invalide.`,
				MESSAGE_NOT_SET: `${e.error} Impossible d'activer le message d'au revoir tant que le message n'est pas configuré.`,
				ENABLED: `${e.success} Le message d'au revoir a bien été activé.`,
				DISABLED: `${e.success} Le message d'au revoir a bien été désactivé.`,
				ALREADY_DISABLED: `${e.success} Le message d'au revoir est déjà désactivé.`,
				CONFIRM_RESET: `${e.loading} Merci de confirmer que vous êtes sûr de vouloir réinitialiser la configuration du message d'au revoir. Tapez \`\`-confirm\`\` pour confirmer ou \`\`cancel\`\` pour annuler.`,
				CANCELLED: `${e.success} La réinitialisation de la configuration du message d'au revoir a été annulée.`,
				RESET_SUCCESS: `${e.success} La configuration du message d'au revoir a bien été réinitilisée.`,
				TIMEOUT: `${e.time} Le temp est écoulé, vous n'avez pas validé que vous vouliez réinitialiser la configuration du message d'au revoir.`,
				NO_MENTION: `${e.error} Merci de mentionner un canal.`,
				CHANNEL_SUCCESS: `${e.success} Le canal d'au revoir a bien été configuré.`,
				NO_ARGS_MESSAGE: (prefix) => `${e.error} Merci de spécifier un message. Vous pouvez trouver les paramètres disponibles avec ${prefix}setleave options.`,
				NON_EXISTENT_CHANNEL: `${e.error} Impossible de configurer le message d'au revoir tant que le canal d'au revoir n'est pas configuré ou invalide.`,
				TOO_LONG: `${e.error} Votre message d'au revoir est trop long, il ne doit pas dépasser 1000 caractères.`,
				MESSAGE_SUCCESS: `${e.success} Le message d'au revoir a bien été configuré.`,
				NO_ARGS: `${e.error} Merci de spécifier une action: on, off, reset, channel, message, options.`,
			},
			PREFIX: {
				DESCRIPTION: `Description`,
				USAGE: `Usage`,
				EXAMPLES: `Example`,
			},
			LANG: {
				DESCRIPTION: `Description`,
				USAGE: `Usage`,
				EXAMPLES: `Example`,
			},
			ADDBONUS: {
				DESCRIPTION: `Description`,
				USAGE: `Usage`,
				EXAMPLES: `Example`,
			},
			ADDINVITERANK: {
				DESCRIPTION: `Description`,
				USAGE: `Usage`,
				EXAMPLES: `Example`,
			},
			FETCHINVITES: {
				DESCRIPTION: `Description`,
				USAGE: `Usage`,
				EXAMPLES: `Example`,
			},
			INVITEBLACKLIST: {
				DESCRIPTION: `Description`,
				USAGE: `Usage`,
				EXAMPLES: `Example`,
			},
			INVITERANK: {
				DESCRIPTION: `Description`,
				USAGE: `Usage`,
				EXAMPLES: `Example`,
			},
			INVITES: {
				DESCRIPTION: `Description`,
				USAGE: `Usage`,
				EXAMPLES: `Example`,
			},
			REMOVEBONUS: {
				DESCRIPTION: `Description`,
				USAGE: `Usage`,
				EXAMPLES: `Example`,
			},
			REMOVEINVITE: {
				DESCRIPTION: `Description`,
				USAGE: `Usage`,
				EXAMPLES: `Example`,
			},
			REMOVEINVITERANK: {
				DESCRIPTION: `Description`,
				USAGE: `Usage`,
				EXAMPLES: `Example`,
			},
			RESTOREINVITES: {
				DESCRIPTION: `Description`,
				USAGE: `Usage`,
				EXAMPLES: `Example`,
			},
			SYNCINVITES: {
				DESCRIPTION: `Description`,
				USAGE: `Usage`,
				EXAMPLES: `Example`,
			},
			GIVEAWAY: {
				DESCRIPTION: `Description`,
				USAGE: `Usage`,
				EXAMPLES: `Example`,
			},
			CLEANIFY: {
				DESCRIPTION: `Permet d'activer ou pas la supression automatique des messages du bot.`,
				USAGE: `$cleanify`,
				EXAMPLES: `$cleanify`,
				ENABLED: `${e.success} Cleanify est maintenant activé.`,
				DISABLED: `${e.success} Cleanify est maintenant désactivé.`
			},


			/* STAFF COMMANDS */

			EVAL: {
				DESCRIPTION: `rere`,
				USAGE: ``,
				EXAMPLES: ``,
			},
			EXEC: {
				DESCRIPTION: `rere`,
				USAGE: ``,
				EXAMPLES: ``,
			},
        }
    }

    /**
	 * The method to get language strings
	 * @param {string} term The string or function to look up
	 * @param {...*} args Any arguments to pass to the lookup
	 * @returns {string|Function}
	 */
	get(term, ...args) {
		//if (!this.enabled && this !== this.store.default) return this.store.default.get(term, ...args);
		const value = this.language[term];
		/* eslint-disable new-cap */
		switch (typeof value) {
			case `function`: return value(...args);
			default: return value;
		}
	}

	getLang(){
		return lang;
	}

	printDate(pdate, isLongDate){
        let monthNames = [
            `janvier`, `février`, `mars`,
            `avril`, `mai`, `juin`, `juillet`,
            `août`, `septembre`, `octobre`,
            `novembre`, `décembre`
        ];

        let day = pdate.getDate();
        let monthIndex = pdate.getMonth();
        let year = pdate.getFullYear();
        let hour = pdate.getHours() < 10 ? `0` + pdate.getHours() : pdate.getHours();
        let minute = pdate.getMinutes() < 10 ? `0` + pdate.getMinutes() : pdate.getMinutes();

		let thedate = (isLongDate) ? day + ` ` + monthNames[monthIndex] + ` ` + year + ` à ` + hour + `h` + minute 
		: day + ` ` + monthNames[monthIndex] + ` ` + year;
        return thedate;
	}

	/**
	 * Parse ms and returns a string
	 * @param {number} milliseconds The amount of milliseconds
	 * @returns The parsed milliseconds
	 */
	convertMs(milliseconds){
		let roundTowardsZero = milliseconds > 0 ? Math.floor : Math.ceil;
		let days = roundTowardsZero(milliseconds / 86400000),
		hours = roundTowardsZero(milliseconds / 3600000) % 24,
		minutes = roundTowardsZero(milliseconds / 60000) % 60,
		seconds = roundTowardsZero(milliseconds / 1000) % 60;
		if(seconds === 0){
			seconds++;
		}
		let isDays = days > 0,
		isHours = hours > 0,
		isMinutes = minutes > 0;
		let pattern = 
		(!isDays ? `` : (isMinutes || isHours) ? `{days} jours, ` : `{days} jours et `)+
		(!isHours ? `` : (isMinutes) ? `{hours} heures, ` : `{hours} heures et `)+
		(!isMinutes ? `` : `{minutes} minutes et `)+(`{seconds} secondes`);
		let sentence = pattern
			.replace(`{duration}`, pattern)
			.replace(`{days}`, days)
			.replace(`{hours}`, hours)
			.replace(`{minutes}`, minutes)
			.replace(`{seconds}`, seconds);
		return sentence;
	}
}