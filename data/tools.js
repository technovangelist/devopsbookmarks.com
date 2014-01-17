exports.tools = [
{
	slug: "statsd",
	name: "Statsd",
	description: "A network daemon that listens and collects statistics and sends aggregates to many pluggable backend services",
	tags: [ "linux", "windows", "osx", "open-source", "monitoring" ],
	url: "https://github.com/etsy/statsd/"
}, {
	slug: "graphite",
	name: "Graphite",
	description: "Graphite is a visualization tool for statistics configured from various sources. You can create customizable reports and dashboards, and it is one of the preferred backends for Statsd",
	tags: [ "linux", "open-source", "monitoring" ],
	url: "http://graphite.readthedocs.org/"
}, {
	slug: "anthracite",
	name: "Anthracite",
	description: "Tracks and manages all events that can have business and/or operational impact (deploys, manual changes, outages, press releases, etc) and provides metrics and reports",
	tags: [ "linux", "windows", "osx", "open-source", "monitoring" ],
	url: "https://github.com/Dieterbe/anthracite"
}, {
	slug: "opskeleton",
	name: "Opskeleton",
	description: "Bootstrap a DevOps infrastructure with some opinionated defaults (vagrant, puppet, librarian-puppet, git, etc), standard development guidelines, etc. Makes it very quick to get a DevOps team up and running",
	tags: [ "linux", "open-source", "scm", "virt", "provisioning", "orchestration" ],
	url: "https://github.com/narkisr/opskeleton"
}, {
	slug: "vagabond",
	name: "Vagabond",
	description: "Builds local nodes for Chef using LXC (Linux Containers) which are lightweight virtual machines, thus making performance a lot faster",
	tags: [ "linux", "open-source", "virt" ],
	url: "https://github.com/chrisroberts/vagabond"
}, {
	slug: "deploykit",
	name: "DeployKit",
	description: "A generic integration tool built on a Message Queue, to make it easy to communicate events and triggers across various parts parts of the infrastructure. Created to ease the pain of configuring many disparate events in a CI",
	tags: [ "linux", "windows", "osx", "open-source", "ci" ],
	url: "https://github.com/FuturePublishing/future-deploykit"
}, {
	slug: "slaughter",
	name: "Slaughter",
	description: "A Perl tool for automating configuration, maintenance and management of large number of systems. Allows policies to be written in a central server and implement specific policies in various servers",
	tags: [ "linux", "open-source", "provisioning", "orchestration" ],
	url: "https://github.com/skx/slaughter"
}, {
	slug: "deliver",
	name: "Deliver",
	description: "A pure bash-based deployment tool with virtually no dependencies except the shell.",
	tags: [ "linux", "open-source", "provisioning" ],
	url: "https://github.com/gerhard/deliver"
}, {
	slug: "monigusto",
	name: "Monigusto",
	description: "A collection of Chef recipes to install various monitoring tools (such as sensu, statsd, etc). Makes it a breeze to get a monitoring infrastructure up and running",
	tags: [ "linux", "windows", "osx", "open-source", "monitoring" ],
	url: "https://github.com/monigusto"
}, {
	slug: "fog",
	name: "Fog",
	description: "The Ruby Cloud API library. Provides a Ruby API for interacting and managing many cloud providers. Currently supports more than 20 providers, including EC2, Rackspace, Brightbox, etc.",
	tags: [ "linux", "windows", "osx", "open-source", "cloud-paas" ],
	url: "http://fog.io/"
}, {
	slug: "owasp-zed-zap",
	name: "Zed Attack Project",
	description: "A penetration testing tool for finding vulnerabilities in web applications, from OWASP",
	tags: [ "linux", "windows", "osx", "open-source", "security" ],
	url: "https://www.owasp.org/index.php/OWASP_Zed_Attack_Proxy_Project"
}, {
	slug: "simian-army",
	name: "Simian Army",
	description: "A tool for testing and promoting infrastructure tolerance and high availability. It randomly shuts down servers, or blocks network connections, and makes sure you design your systems to survive these events.",
	tags: [ "linux", "windows", "osx", "open-source", "security" ],
	url: "https://github.com/Netflix/SimianArmy"
}, {
	slug: "orc",
	name: "Orc",
	description: "A model driven orchestration tool for deployment of application clusters",
	tags: [ "linux", "windows", "osx", "open-source", "provisioning", "orchestration" ],
	url: "https://github.com/youdevise/orc/"
}, {
	slug: "metrics",
	name: "Metrics",
	description: "Captures JVM and application-level metrics for Java",
	tags: [ "linux", "windows", "osx", "open-source", "monitoring" ],
	url: "https://github.com/codahale/metrics/"
}, {
	slug: "folsom",
	name: "Folsom",
	description: "Captures Erlang events and metrics",
	tags: [ "linux", "windows", "osx", "open-source", "monitoring" ],
	url: "https://github.com/boundary/folsom"
}, {
	slug: "scales",
	name: "Scales",
	description: "Metrics for Python, tracks python state and statistics. Inspired by the Metrics library for Java",
	tags: [ "linux", "windows", "osx", "open-source", "monitoring" ],
	url: "https://github.com/Cue/scales"
}, {
	slug: "cmb",
	name: "CMB (Cloud Message Bus)",
	description: "A notification service (like Amazon SQS and SNS), allows notifications to be published across many channels like Email, VoIP, SMS, etc",
	tags: [ "linux", "open-source", "monitoring" ],
	url: "https://github.com/Comcast/cmb"
}, {
	slug: "zabbix",
	name: "Zabbix",
	description: "An open source, enterprise-class monitoring framework",
	tags: [ "linux", "windows", "osx", "open-source", "monitoring" ],
	url: "http://www.zabbix.com/"
}, {
	slug: "glances",
	name: "Glances",
	description: "A cross-platform, curses-based monitoring tool written in Python",
	tags: [ "linux", "windows", "osx", "open-source", "monitoring" ],
	url: "http://nicolargo.github.io/glances/"
}, {
	slug: "datascope",
	name: "Datascope",
	description: "Visualizes PostgreSQL query performance using pg_stat_statements",
	tags: [ "linux", "windows", "osx", "open-source", "monitoring" ],
	url: "https://github.com/will/datascope"
}, {
	slug: "zipkin",
	name: "Zipkin",
	description: "A distributed request tracking system, useful for micro-service and distributed architectures written in Scala",
	tags: [ "linux", "windows", "osx", "open-source", "monitoring" ],
	url: "http://twitter.github.io/zipkin/"
}, {
	slug: "puppet-dashboard",
	name: "Puppet Dashboard",
	description: "A web interface for Puppet. It can view and analyze Puppet reports, assign Puppet classes and parameters to nodes, view inventory data and backed-up file contents, etc.",
	tags: [ "linux", "windows", "osx", "open-source", "monitoring" ],
	url: "https://github.com/sodabrew/puppet-dashboard"
}, {
	slug: "uptime",
	name: "Uptime",
	description: "A remotely deployed application that externally monitors the uptime and availability of your real applications and services",
	tags: [ "linux", "windows", "osx", "open-source", "monitoring" ],
	url: "https://github.com/fzaninotto/uptime"
}, {
	slug: "bouncy",
	name: "Bouncy",
	description: "Bounces HTTP requests around for load balancing, or act as a HTTP host router",
	tags: [ "linux", "windows", "osx", "open-source", "process-mgmt" ],
	url: "https://github.com/substack/bouncy"
}, {
	slug: "vaurien",
	name: "Vaurien",
	description: "A Chaos Monkey for TCP, it randomly disconnects or stalls TCP connections in your application to test application tolerance and high availability. Makes sure you correctly handle these unexpected events",
	tags: [ "linux", "windows", "osx", "open-source", "security" ],
	url: ""
}, {
	slug: "dead-mans-snitch",
	name: "Dead Man’s Snitch",
	description: "A cron job monitoring tool that keeps an eye on your crontab and notifies you when something doesn’t happen.",
	tags: [ "linux", "free", "monitoring" ],
	url: "https://deadmanssnitch.com/"
}, {
	slug: "pallet",
	name: "Pallet",
	description: "A tool to provision and maintain servers across various cloud platforms as well as virtual machine platforms, without any dependencies. Provides cloud and operating system independence.",
	tags: [ "linux", "windows", "osx", "open-source", "cloud-paas" ],
	url: "http://palletops.com/"
}, {
	slug: "vmfest",
	name: "VMFest",
	description: "A Pallet plugin which converts VirtualBox into a cloud platform",
	tags: [ "linux", "windows", "osx", "open-source", "virt", "cloud-paas" ],
	url: "https://github.com/tbatchelli/vmfest"
}, {
	slug: "loom",
	name: "Loom",
	description: "Built on top of Fabric and Puppet, it does the stuff that Puppet doesn’t do, which is bootstrapping fresh machines, assigning them roles, deploying Puppet, and installing Puppet modules. It automates stuff that has to be done before Puppet can begin its work",
	tags: [ "linux", "windows", "osx", "open-source", "provisioning" ],
	url: "https://github.com/bfirsh/loom"
}, {
	slug: "fai",
	name: "FAI",
	description: "Fully Automatic Installation (FAI) is a tool for mass unattended deployment of Linux. You can take one or more virgin PCs, turn on the power, and after a few minutes, the systems are installed and completely configured.",
	tags: [ "linux", "open-source", "provisioning" ],
	url: "http://fai-project.org"
}, {
	slug: "cruise-control-net",
	name: "CruiseControl.NET",
	description: "A CI server made in .Net, mostly targeting Windows/.net platforms but can support other languages too. It was developed as a language fork of the original CruiseControl CI project developed by ThoughtWorks",
	tags: [ "windows", "open-source", "ci" ],
	url: "http://www.cruisecontrolnet.org/projects/ccnet/wiki/About"
}, {
	slug: "cruise-control-rb",
	name: "CruiseControl.rb",
	description: "CI server written in Ruby with a focus on simplicity and being easy to hack, open sourced by ThoughtWorks",
	tags: [ "linux", "open-source", "ci" ],
	url: "https://github.com/thoughtworks/cruisecontrol.rb"
}, {
	slug: "mcollective",
	name: "MCollective",
	description: "Marionette Collective (MCollective) is an orchestration framework built on top of Puppet. It can interact with a large number of servers (using a pub-sub middleware) and can execute jobs in parallel",
	tags: [ "linux", "windows", "osx", "free", "orchestration" ],
	url: "http://docs.puppetlabs.com/mcollective/"
}, {
	slug: "fabric",
	name: "Fabric",
	description: "Fabric is a python framework to configure deployment or system administration tasks, and then run those tasks on local or remote systems. It uses SSH heavily for interacting with remote systems, and uses Roles to group tasks",
	tags: [ "linux", "osx", "open-source", "orchestration" ],
	url: "http://docs.fabfile.org/"
}, {
	slug: "capistrano",
	name: "Capistrano",
	description: "The Ruby equivalent of Fabric, Capistrano is a Ruby framework to configure and run deployment or system administration tasks on local or remote machines. It extends the Rake DSL to define tasks, and can group tasks by Roles.",
	tags: [ "linux", "osx", "open-source", "provisioning", "orchestration" ],
	url: "http://capistranorb.com"
}, {
	slug: "bcfg2",
	name: "Bcfg2",
	description: "bee-config (Bcfg) 2 is a centralized configuration management server to configure large number of systems, built to be cross platform. Bcfg2 uses a simple XML based configuration model with intuitive items like packages, services, config files, dependencies, etc. This model is easily validatable and can be used to audit and reconcile remote systems.",
	tags: [ "linux", "windows", "osx", "open-source", "provisioning" ],
	url: "http://bcfg2.org"
}, {
	slug: "fpm",
	name: "FPM",
	description: "Effing Package Managers (FPM) is a single tool that can generate rpm, deb, solaris, osx (pkg) and many other packages. It supports multiple inputs (directory, gem, egg, deb, etc) and can produce multiple outputs (rpm, deb, solaris, etc). It relieves the pain out of creating various kinds of packages.",
	tags: [ "linux", "osx", "open-source", "packaging" ],
	url: "https://github.com/jordansissel/fpm"
}, {
	slug: "icinga",
	name: "Icinga",
	description: "Icinga is an enterprise-grade monitoring system. It was forked from Nagios and has added many often new features and patches, including a HTML5 UI, REST interface, dynamic tables, etc. It is also backwards compatible with Nagios, so all the existing plugins can be reused.",
	tags: [ "linux", "windows", "osx", "open-source", "monitoring" ],
	url: "https://www.icinga.org"
}, {
	slug: "ganglia",
	name: "Ganglia",
	description: "Ganglia is a distributed monitoring system for high performance computing systems such as clusters and grids. It is optimized for low overhead and high concurency.",
	tags: [ "linux", "windows", "osx", "open-source", "monitoring" ],
	url: "http://ganglia.sourceforge.net"
}, {
	slug: "logstash",
	name: "Logstash",
	description: "A modern tool for managing events and logs, with an ElasticSearch backend which allows a high degree of searching and filtering. It includes a shipper in remote systems, indexer in the aggregator machine, and a Web UI.",
	tags: [ "linux", "windows", "osx", "open-source", "monitoring" ],
	url: "http://logstash.net"
}, {
	slug: "kibana",
	name: "Kibana",
	description: "Kibana is a modern, beautiful visualization tool that works seamlessly with Logstash and ElasticSearch. It features a no-code setup, realtime analytics, and much more.",
	tags: [ "linux", "windows", "osx", "open-source", "monitoring" ],
	url: "http://www.elasticsearch.org/overview/kibana/"
}, {
	slug: "errbit",
	name: "Errbit",
	description: "An open source, self-hosted error catching tool, which can collect and manage errors from other applications. It is compatible with the Airbrake API and can be used as a drop-in replacement.",
	tags: [ "linux", "windows", "osx", "open-source", "monitoring" ],
	url: "https://github.com/errbit/errbit"
}, {
	slug: "librarian-puppet",
	name: "Librarian-Puppet",
	description: "Librarian-Puppet is a source structure and dependency manager for Puppet modules, similar to bundler for Ruby. Each Puppet module can be managed as a separate source repository with individual versioning, and can then be pulled into your Puppetfile.",
	tags: [ "linux", "windows", "osx", "open-source", "source-code-mgmt" ],
	url: "https://github.com/rodjek/librarian-puppet"
}, {
	slug: "berkshelf",
	name: "Berkshelf",
	description: "A cookbook source structure manager for Chef, similar to Bundler for Ruby. Each Chef cookbook can be structured as an individual entity and can be pulled into your main Chef workflows.",
	tags: [ "linux", "windows", "osx", "open-source", "source-code-mgmt" ],
	url: "http://berkshelf.com"
}, {
	slug: "jclouds",
	name: "jclouds",
	description: "A Java Library for controlling cloud resources, with various plugins for many popular cloud providers.",
	tags: [ "linux", "windows", "osx", "open-source", "cloud-paas" ],
	url: "http://jclouds.apache.org"
}, {
	slug: "barkeep",
	name: "Barkeep",
	description: "A simple, friendly and self-hosted code review tool, which is focused purely on code reviewing. Can support both pre and post-commit workflows",
	tags: [ "linux", "osx", "open-source", "source-code-mgmt" ],
	url: "http://getbarkeep.org"
}, {
	slug: "phabricator",
	name: "Phabricator",
	description: "Phabricator is an open source collection of development and code management, including code reviews and audits, browsing repositories, tracking bugs, etc",
	tags: [ "linux", "osx", "open-source", "source-code-mgmt" ],
	url: "http://phabricator.org"
}, {
	slug: "gerrit",
	name: "Gerrit",
	description: "A Web based code review and project management system for Git projects",
	tags: [ "linux", "windows", "osx", "open-source", "source-code-mgmt" ],
	url: "https://code.google.com/p/gerrit/"
}, {
	slug: "brooklyn",
	name: "Brooklyn",
	description: "A Java based deployment tool, focused on both deployment as well as post-deploy lifecycle management. It is aware of network topologies, integrates with many cloud and PaaS APIs, and is designed to handle the entire roll-out",
	tags: [ "linux", "windows", "osx", "open-source", "provisioning", "orchestration" ],
	url: "http://brooklyncentral.github.io"
}, {
	slug: "credmgr",
	name: "credmgr",
	description: "Securely manages privileged account credentials, such as root passwords, using Shamir secret sharing. Its like 1Password for DevOps.",
	tags: [ "linux", "open-source", "provisioning" ],
	url: "https://github.com/treyka/credmgr"
}, {
	slug: "mina",
	name: "Mina",
	description: "A Ruby Rake-like DSL for fast deployment and automation, similar to Capistrano but faster and lesser overhead, since it creates only a single SSH connection for a deploy",
	tags: [ "linux", "osx", "open-source", "orchestration" ],
	url: "http://nadarei.co/mina/"
}, {
	slug: "starcluster",
	name: "StarCluster",
	description: "A specialized, cluster computing toolkit for EC2, designed to summon and manage clusters of virtual machines in EC2.",
	tags: [ "linux", "open-source", "cloud-paas" ],
	url: "http://star.mit.edu/cluster/"
}, {
	slug: "openstack",
	name: "OpenStack",
	description: "An open source, massively scalable cloud operating system used for building private and public clouds",
	tags: [ "linux", "open-source", "virt", "cloud-paas" ],
	url: "http://www.openstack.org"
}, {
	slug: "opsbot",
	name: "OpsBot",
	description: "A pluggable, configurable bot for improving communication in operations",
	tags: [ "linux", "open-source", "ci" ],
	url: "https://github.com/alcy/OpsBot"
}, {
	slug: "ircmachine",
	name: "IRC Machine",
	description: "An IRC bot built on top of Ruby and EventMachine, with a RESTful HTTP interface",
	tags: [ "linux", "open-source", "ci" ],
	url: ""
}, {
	slug: "ansible",
	name: "Ansible",
	description: "A versatile orchestration engine that can automate systems and apps. Instead of a custom scripting language or code, it is very simple and shell based. It is also agent-less, so you can just start using it right away and get things done",
	tags: [ "linux", "open-source", "provisioning", "orchestration" ],
	url: "http://www.ansibleworks.com"
}, {
	slug: "sensu",
	name: "Sensu",
	description: "Sensu is a simple, malleable and scalable monitoring framework which is highly composable",
	tags: [ "linux", "open-source", "monitoring" ],
	url: "http://sensuapp.org"
}, {
	slug: "sunzi",
	name: "Sunzi",
	description: "A shell-based pure provisioning tool which doesn’t try to do anything else. Has no dependencies other than the shell",
	tags: [ "linux", "open-source", "provisioning" ],
	url: "https://github.com/kenn/sunzi"
}, {
	slug: "gearman",
	name: "gearman",
	description: "A generic application framework to farm out work to other machines or processes, and allows parallel processing and load balancing",
	tags: [ "linux", "windows", "osx", "open-source", "orchestration" ],
	url: "http://gearman.org"
}, {
	slug: "brood",
	name: "Brood",
	description: "A Deployment framework written in PHP. Can deploy to multiple servers using Gearman.",
	tags: [ "linux", "windows", "osx", "open-source", "provisioning" ],
	url: "https://github.com/ign/brood"
}, {
	slug: "riemann",
	name: "Riemann",
	description: "Riemann aggregates events from servers and applications, notifies exceptions, tracks latency, collects system statistics and more, all with a powerful stream processing language",
	tags: [ "linux", "open-source", "monitoring" ],
	url: "http://riemann.io"
}, {
	slug: "amon-one",
	name: "AmonOne",
	description: "A modern, self-hosted server monitoring system with system monitoring, process monitoring and notifications",
	tags: [ "linux", "windows", "osx", "open-source", "monitoring" ],
	url: "https://github.com/martinrusev/amonone"
}, {
	slug: "cft",
	name: "Cft",
	description: "Cft watches as you make changes to your server, and then creates puppet manifests for the resulting actions. Simplifies creating puppet configuration.",
	tags: [ "linux", "open-source", "provisioning", "orchestration" ],
	url: "http://cft.et.redhat.com"
}, {
	slug: "owncloud",
	name: "ownCloud",
	description: "A self-hosted personal cloud/social platform with contacts, calendars, file sharing, tasks, etc.",
	tags: [ "linux", "open-source", "cloud-paas" ],
	url: "http://owncloud.org/six/"
}, {
	slug: "deltacloud",
	name: "DeltaCloud",
	description: "A Ruby API to interact with various cloud platforms",
	tags: [ "linux", "windows", "osx", "open-source", "cloud-paas" ],
	url: "http://deltacloud.apache.org"
}, {
	slug: "rex",
	name: "Rex",
	description: "A agent-less server orchestration tool built on Perl",
	tags: [ "linux", "windows", "osx", "open-source", "orchestration" ],
	url: "http://www.rexify.org"
}, {
	slug: "puppet-profiler",
	name: "Puppet-profiler",
	description: "Find out what’s making your Puppet run so bloody slow",
	tags: [ "linux", "windows", "osx", "open-source", "monitoring" ],
	url: "https://github.com/rodjek/puppet-profiler"
}, {
	slug: "fnordmetric",
	name: "FnordMetric",
	description: "A HTML5/Javascript API for collecting and visualizing time series data",
	tags: [ "linux", "windows", "osx", "open-source", "monitoring" ],
	url: "http://fnordmetric.io"
}, {
	slug: "librarian-chef",
	name: "Librarian-chef",
	description: "A cookbook manager, or bundler equivalent, for Chef cookbooks. It allows to separately store, manage and reuse your Chef cookbooks",
	tags: [ "linux", "windows", "osx", "open-source", "source-code-mgmt" ],
	url: "https://github.com/applicationsonline/librarian-chef"
}, {
	slug: "djangy",
	name: "Djangy",
	description: "An open source cloud hosting service for Python/Django web applications. Its like an open source Heroku for python/django",
	tags: [ "linux", "windows", "osx", "open-source", "cloud-paas" ],
	url: "https://github.com/dpaola2/djangy"
}, {
	slug: "sequencer",
	name: "Sequencer",
	description: "Sequencer can ping, power on and power off clusters of machines in your datacenter",
	tags: [ "linux", "open-source", "orchestration" ],
	url: "http://pv-bull.github.io/sequencer/"
}, {
	slug: "salt-stack",
	name: "SaltStack",
	description: "Salt is a powerful and different approach to infrastructure management, by focusing on high speed communications between large number of systems, and can perform orchestration, remote code execution and much more.",
	tags: [ "linux", "open-source", "commercial", "provisioning", "orchestration" ],
	url: "http://www.saltstack.com/community/"
}, {
	slug: "rundeck",
	name: "Rundeck",
	description: "Turns your operational procedures into self-service jobs. Define routine tasks in Rundeck and safely hand it over to the rest of the team so that they can perform common operational tasks",
	tags: [ "linux", "windows", "osx", "open-source", "orchestration" ],
	url: "http://rundeck.org"
}, {
	slug: "fig",
	name: "Fig",
	description: "A package management tool, similar to Ivy/APT, but language agnostic, faster and works well with both executables and libraries.",
	tags: [ "linux", "windows", "osx", "open-source", "packaging" ],
	url: "https://github.com/mfoemmel/fig"
}, {
	slug: "deployinator",
	name: "Deployinator",
	description: "A simple, rack-based deployment framework",
	tags: [ "linux", "open-source", "provisioning", "orchestration" ],
	url: "https://github.com/etsy/deployinator"
}, {
	slug: "archipel",
	name: "Archipel",
	description: "A centralized tool for managing Virtual machines and instances, such as creating, booting, migrating, snapshots, packaging, networking, monitoring, VNC client and much more! Allows you to control virtual machines through web based UI or an IRC bot",
	tags: [ "linux", "windows", "osx", "open-source", "virt", "cloud-paas" ],
	url: "http://archipelproject.org"
}, {
	slug: "diamond",
	name: "Diamond",
	description: "A python daemon that collects system statistics and sends it to Graphite",
	tags: [ "linux", "windows", "osx", "open-source", "monitoring" ],
	url: "https://github.com/BrightcoveOS/Diamond"
}, {
	slug: "logio",
	name: "log.io",
	description: "Realtime log monitoring directly in the browser, without any persistence layer in the middle!",
	tags: [ "linux", "windows", "osx", "open-source", "monitoring" ],
	url: "http://logio.org"
}, {
	slug: "eucalyptus",
	name: "Eucalyptus",
	description: "An open source software for building Amazon EC2-compatible private and hybrid cloud platforms",
	tags: [ "linux", "open-source", "virt", "cloud-paas" ],
	url: "https://github.com/eucalyptus/eucalyptus"
}, {
	slug: "pulp",
	name: "Pulp",
	description: "A platform for managing software package repositories",
	tags: [ "linux", "open-source", "packaging" ],
	url: "http://www.pulpproject.org"
}, {
	slug: "monit",
	name: "Monit",
	description: "An open source utility for managing and monitoring processes, programs, files, directories and filesystems",
	tags: [ "linux", "open-source", "monitoring" ],
	url: "http://mmonit.com/monit/"
}, {
	slug: "jmxtrans",
	name: "jmxtrans",
	description: "Plugs Java VM statistics via JMX to various backend monitoring tools",
	tags: [ "linux", "windows", "osx", "open-source", "monitoring" ],
	url: "https://github.com/jmxtrans/jmxtrans"
}, {
	slug: "logster",
	name: "Logster",
	description: "Reads log files and generates metrics in Graphite, Ganglia or Amazon CloudWatch",
	tags: [ "linux", "windows", "osx", "open-source", "monitoring" ],
	url: "https://github.com/etsy/logster"
}, {
	slug: "herd",
	name: "Herd",
	description: "A bittorrent based file distribution system based on Twitter’s Murder. It uses BitTorrent to push artifacts and code very fast across thousands of servers.",
	tags: [ "linux", "windows", "osx", "open-source", "packaging" ],
	url: "https://github.com/russss/Herd"
}, {
	slug: "poni",
	name: "Poni",
	description: "A system management and provisioning tool, with centralized configuration management",
	tags: [ "linux", "open-source", "provisioning", "orchestration" ],
	url: "http://melor.github.io/poni/"
}, {
	slug: "graylog",
	name: "Graylog 2",
	description: "An open source data analytics and reporting system, built on top of Java, Scala and ElasticSearch",
	tags: [ "linux", "open-source", "monitoring" ],
	url: "http://www.graylog2.org"
}, {
	slug: "jenkins-ci",
	name: "Jenkins",
	description: "Jenkins is an open source, lightweight CI tool written in Java, with high extensibility and a fast release cycle. It was forked from Hudson after Oracle acquired it, and has since added significantly more features than the original",
	tags: [ "linux", "windows", "osx", "open-source", "ci" ],
	url: "http://jenkins-ci.org/"
}, {
	slug: "hudson-ci",
	name: "Hudson",
	description: "The original lightweight CI tool written in Java. Initially part of Sun, then acquired by Oracle, and now maintained to the Eclipse Foundation",
	tags: [ "linux", "windows", "osx", "open-source", "ci" ],
	url: "http://hudson-ci.org/"
}, {
	slug: "teamcity",
	name: "TeamCity",
	description: "From JetBrains (makers of IntelliJ), TeamCity is a feature packed CI tool with out-of-the-box support for Java, .Net, Ruby and many other languages. It has deep language-aware integration, like maven, RVM, rake, popular testing frameworks, code coverage, etc, and consequently it occupies more resources. It has a liberal free usage license.",
	tags: [ "linux", "windows", "osx", "free", "commercial", "ci" ],
	url: "http://www.jetbrains.com/teamcity/"
}, {
	slug: "awsbox",
	name: "AWSBox",
	description: "DIY Platform-as-a-Service tool specialized for NodeJS projects with AWS as the backend, and created by Mozilla",
	tags: [ "linux", "open-source", "cloud-paas" ],
	url: "https://github.com/mozilla/awsbox"
}, {
	slug: "osv",
	name: "OSV",
	description: "An operating system for lightweight virtual machines, designed from ground-up to run a single application, similar to CoreOS",
	tags: [ "linux", "open-source", "virt" ],
	url: "http://osv.io/"
}, {
	slug: "ventriloquist",
	name: "Ventriloquist",
	description: "Allows easy provisioning of development VMs using declarative service and dependency management, built on top of Vagrant and Docker",
	tags: [ "linux", "osx", "open-source", "virt" ],
	url: "https://github.com/fgrehm/ventriloquist"
}, {
	slug: "boxen",
	name: "Boxen",
	description: "Boxen automates the entire process of setting up a Mac development environment. It can clone your project, install toolchains, apply security policies, clone your dotfiles and much more.",
	tags: [ "osx", "open-source", "provisioning" ],
	url: "http://boxen.github.com"
}, {
	slug: "batou",
	name: "Batou",
	description: "Batou makes it easy to perform automated deployments. It combines Fabric's simplicty and SSH automation, with Puppet's declarative syntax and idempotence",
	tags: [ "linux", "open-source", "provisioning" ],
	url: "http://batou.readthedocs.org"
}, {
	slug: "collectd3",
	name: "collectd3",
	description: "collectd + d3js = Beautiful D3JS visualizations of system performance statistics collected using collectd",
	tags: [ "linux", "open-source", "monitoring" ],
	url: "https://github.com/StackStorm/collectd3"
}, {
	slug: "collectd",
	name: "collectd",
	description: "A daemon that collects system performance statistics periodically, and provides tons of plugins to store and analyze these values",
	tags: [ "linux", "windows", "osx", "open-source", "monitoring" ],
	url: "http://collectd.org/"
}, {
	slug: "sovereign",
	name: "Sovereign",
	description: "A set of Ansible playbooks to configure and maintain your own personal cloud, including email, calendars, file storage, vpn, irc, etc. A nice collection of utilities as well as a good showcase of Ansible's features",
	tags: [ "linux", "open-source", "cloud-paas" ],
	url: "https://github.com/al3x/sovereign"
}, {
	slug: "travis-ci",
	name: "Travis-CI",
	description: "Travis CI is a hosted CI service free for open source communities. It directly integrates with GitHub, BitBucket and many other version control systems, and offers deep support for a variety of languages.",
	tags: [ "linux", "free", "commercial", "ci" ],
	url: "https://travis-ci.org/"
}, {
	slug: "hubot",
	name: "Hubot",
	description: "Hubot is a chat bot that can be configured to do a variety of tasks. Apart from usual CI stuff like deploying, it can be interestingly configured to do different workflows like posting images, translating languages and integrating with Google Maps, and being a bot, it can be configured to ask questions like what is the current deployed version, etc.",
	tags: [ "linux", "windows", "osx", "open-source", "ci" ],
	url: "http://hubot.github.com/"
}
];
