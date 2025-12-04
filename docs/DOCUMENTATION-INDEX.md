# Azora Documentation Index

## 🌟 Vision & Strategy

- **[Master Vision](MASTER-VISION.md)** ⭐ THE NORTH STAR - Agentic Operating System architecture
- **[Constitution](../CONSTITUTION.md)** - Constitutional AI principles and governance
- **[Master Implementation Plan](MASTER-IMPLEMENTATION-PLAN.md)** - 147 tasks across 6 phases

## 🚀 Quick Start

- **New Developer?** → [DEVELOPER-GUIDE.md](docs/DEVELOPER-GUIDE.md)
- **Deploying?** → [DEPLOYMENT-QUICK-REFERENCE.md](DEPLOYMENT-QUICK-REFERENCE.md)
- **On-Call?** → [OPERATIONS-RUNBOOK.md](docs/operations/OPERATIONS-RUNBOOK.md)
- **Using API?** → [API-REFERENCE.md](docs/api/API-REFERENCE.md)

## 📚 Documentation Categories

### For Developers

#### Getting Started
- [Developer Guide](docs/DEVELOPER-GUIDE.md) - Setup and development workflow
- [Architecture](docs/ARCHITECTURE.md) - System architecture overview
- [Contributing](CONTRIBUTING.md) - How to contribute

#### API Documentation
- **[API Reference](docs/api/API-REFERENCE.md)** ⭐ NEW
  - Authentication endpoints
  - Course management
  - Payment processing
  - Error codes and responses
  - Rate limiting
  - SDK usage

#### Testing
- [Testing Guidelines](docs/TESTING-GUIDELINES.md) - Testing standards
- [E2E Tests](tests/e2e/README.md) - End-to-end test suite
- [Test Coverage](docs/coverage-baseline.md) - Coverage requirements

### For DevOps

#### Deployment
- **[Deployment Quick Reference](DEPLOYMENT-QUICK-REFERENCE.md)** ⭐ ESSENTIAL
  - Common commands
  - Quick deploy
  - Troubleshooting
  
- **[Deployment Runbook](docs/deployment/DEPLOYMENT-RUNBOOK.md)** ⭐ ESSENTIAL
  - Pre-deployment checklist
  - Step-by-step procedures
  - Rollback procedures
  - Troubleshooting guide

- **[Infrastructure Guide](docs/deployment/INFRASTRUCTURE-GUIDE.md)** ⭐ NEW
  - Architecture overview
  - Component specifications
  - Monitoring setup
  - Disaster recovery
  - Security configuration

#### Operations
- **[Operations Runbook](docs/operations/OPERATIONS-RUNBOOK.md)** ⭐ NEW
  - Incident response
  - Common tasks
  - Monitoring checklist
  - Escalation paths
  - Useful commands

#### Infrastructure
- [Kubernetes Configs](infrastructure/kubernetes/) - K8s manifests
- [Helm Charts](infrastructure/helm/) - Helm deployment charts
- [Monitoring](monitoring/) - Prometheus & Grafana configs

### For Product/Business

#### Product Documentation
- [Product Suite](PRODUCT-SUITE.md) - All Azora products
- [README](README.md) - Project overview
- [Revenue Model](docs/REVENUE-MODEL.md) - Business model

#### Compliance
- [GDPR Compliance](docs/GDPR-COMPLIANCE.md) - Data protection
- [Security Policy](docs/SECURITY-POLICY.md) - Security practices
- [Privacy Policy](docs/PRIVACY-POLICY.md) - Privacy commitments

### For Leadership

#### Strategy
- [Go-to-Market Strategy](docs/GO-TO-MARKET-STRATEGY.md) - Market approach
- [Ubuntu Philosophy](docs/UBUNTU-PHILOSOPHY.md) - Core values
- [Azora Constitution](docs/AZORA-CONSTITUTION.md) - Guiding principles

#### Metrics
- [Performance Benchmarks](docs/PERFORMANCE-BENCHMARKS.md) - Performance targets
- [SLO Definitions](docs/SLO-SLI-DEFINITIONS.md) - Service level objectives

## 🔧 Technical Documentation

### Architecture
- [System Architecture](docs/SYSTEM-ARCHITECTURE.md) - Overall system design
- [Service Architecture](docs/SERVICE-ARCHITECTURE.md) - Microservices design
- [Database Guide](docs/DATABASE-GUIDE.md) - Database schema and design

### Security
- [Security Best Practices](docs/SECURITY-BEST-PRACTICES.md) - Security guidelines
- [Security Headers](docs/SECURITY-HEADERS.md) - HTTP security headers
- [IP Protection](docs/IP-PROTECTION.md) - Intellectual property

### Performance
- [Performance Monitoring](docs/PERFORMANCE-MONITORING-SETUP.md) - Monitoring setup
- [Performance Budget](docs/PERFORMANCE-BUDGET.md) - Performance targets

## 📋 Runbooks & Procedures

### Deployment
- [Deployment Runbook](docs/deployment/DEPLOYMENT-RUNBOOK.md) - Complete deployment guide
- [Infrastructure Guide](docs/deployment/INFRASTRUCTURE-GUIDE.md) - Infrastructure details
- [Quick Reference](DEPLOYMENT-QUICK-REFERENCE.md) - Quick commands

### Operations
- [Operations Runbook](docs/operations/OPERATIONS-RUNBOOK.md) - Daily operations
- [Incident Response](docs/INCIDENT-RESPONSE-PROCEDURES.md) - Incident handling
- [Runbooks](docs/RUNBOOKS.md) - Additional runbooks

### Compliance
- [GDPR Procedures](docs/GDPR-COMPLIANCE.md) - GDPR compliance
- [Data Retention](docs/DATA-RETENTION-POLICY.md) - Data retention policy
- [Compliance Procedures](docs/COMPLIANCE-PROCEDURES.md) - Compliance checklist

## 🎯 By Use Case

### "I need to..."

#### Deploy to Production
1. Read: [Deployment Runbook](docs/deployment/DEPLOYMENT-RUNBOOK.md)
2. Use: [Deployment Scripts](infrastructure/helm/scripts/)
3. Reference: [Quick Reference](DEPLOYMENT-QUICK-REFERENCE.md)

#### Respond to an Incident
1. Read: [Operations Runbook](docs/operations/OPERATIONS-RUNBOOK.md)
2. Check: [Incident Response](docs/INCIDENT-RESPONSE-PROCEDURES.md)
3. Escalate: Follow escalation path in runbook

#### Integrate with API
1. Read: [API Reference](docs/api/API-REFERENCE.md)
2. Use: [API Documentation](docs/API-DOCUMENTATION.md)
3. Test: Use provided examples

#### Set Up Monitoring
1. Read: [Infrastructure Guide](docs/deployment/INFRASTRUCTURE-GUIDE.md)
2. Configure: [Monitoring Stack](monitoring/)
3. Create: Dashboards in Grafana

#### Write Tests
1. Read: [Testing Guidelines](docs/TESTING-GUIDELINES.md)
2. Reference: [E2E Tests](tests/e2e/README.md)
3. Use: [Test Templates](tests/templates/)

## 📊 Documentation Status

### ✅ Complete
- API Reference
- Deployment Runbook
- Infrastructure Guide
- Operations Runbook
- E2E Test Suite
- CI/CD Integration

### 🔄 In Progress
- Load testing documentation
- Security audit reports
- Performance optimization guides

### 📝 Planned
- Video tutorials
- Interactive API explorer
- Architecture decision records (ADRs)

## 🔍 Search Tips

### Find by Topic
```bash
# Search all docs
grep -r "keyword" docs/

# Search specific category
grep -r "deployment" docs/deployment/

# Search runbooks
grep -r "incident" docs/operations/
```

### Common Searches
- **Deployment**: `docs/deployment/`
- **API**: `docs/api/`
- **Operations**: `docs/operations/`
- **Security**: Search for "security" in docs/
- **Performance**: Search for "performance" in docs/

## 📞 Get Help

### Documentation Issues
- **Missing docs?** Create issue with label `documentation`
- **Unclear docs?** Create issue with label `documentation-improvement`
- **Found error?** Create PR with fix

### Support Channels
- **Slack**: #engineering, #devops, #oncall
- **Email**: support@azora.world
- **Emergency**: Follow escalation path in Operations Runbook

## 🔄 Keep Documentation Updated

### When to Update
- After every deployment
- After incident resolution
- When processes change
- When new features added

### How to Update
1. Edit markdown files
2. Create PR with changes
3. Get review from team
4. Merge and deploy

---

**Last Updated**: January 2025
**Maintained By**: Engineering Team
**Questions?** Ask in #engineering on Slack
