;(function () {

	/**
	 * Commit class
	 * A single commit.
	 *
	 * @param {number} id  		 ID of commit.
	 * @param {string} msg 		 Commit message.
	 */
	function Commit(id, message) {
		this.id = id;
		this.message = message;
	}

	/**
	 * Git class
	 * Represents a Git repository.
	 *
	 * @param {string} name Repository name.
	 */
	function Git(name) {
		this.name = name; // Repo name
		this.lastCommitId = -1; // Keep track of last commit id.
	}

	/**
	 * Make a commit.
	 * @param  {string} message Commit message.
	 * @return {Commit}         Created commit object.
	 */
	Git.prototype.commit = function (message) {
		// Increment last commit id and pass into new commit.
		var commit = new Commit(++this.lastCommitId, message);
		return commit;
	};

	// Expose Git class on window.
	window.Git = Git;
;})();