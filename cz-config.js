module.exports = {
  types: [
    { value: 'feat', name: 'feat:     A new feature within the domain' },
    { value: 'fix', name: 'fix:      A bug fix within the domain' },
    { value: 'docs', name: 'docs:     Documentation only changes' },
    { value: 'style', name: 'style:    Code style changes (white-space, formatting, etc)' },
    { value: 'refactor', name: 'refactor: Refactoring existing code without adding features or fixing bugs' },
    { value: 'perf', name: 'perf:     Performance improvements' },
    { value: 'test', name: 'test:     Adding or correcting tests' },
    { value: 'chore', name: 'chore:    Changes to build process, tools, or libraries' },
    { value: 'revert', name: 'revert:   Reverts a previous commit' }
  ],
  scopes: [
    { name: 'core' },        // Core functionality
    { name: 'ui' },          // User Interface
    { name: 'api' },         // API integrations
    { name: 'libs' },        // Shared libraries
    { name: 'domain' },      // Domain-specific changes
    { name: 'infrastructure' } // Infrastructure or application services
  ],
  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix', 'refactor'],
  skipQuestions: ['body'],
  subjectLimit: 100,
  breakingChangePrefix: 'BREAKING CHANGE:',
  breakingChangeDelimiter: ' '
};


  