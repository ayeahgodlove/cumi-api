"use strict";
// src/presentation/mappers/category-mapper.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceMapper = exports.EventMapper = exports.BannerMapper = exports.ProjectMapper = exports.RoleMapper = exports.UserMapper = exports.DocumentMapper = exports.CommentMapper = exports.TagMapper = exports.PostMapper = exports.CategoryMapper = void 0;
class CategoryMapper {
    toDTO(category) {
        const entity = category.toJSON();
        return entity;
    }
    toDTOs(categories) {
        const _categories = categories.map((category) => {
            const entity = category.toJSON();
            return entity;
        });
        return _categories;
    }
}
exports.CategoryMapper = CategoryMapper;
class PostMapper {
    toDTO(post) {
        const entity = post.toJSON();
        return entity;
    }
    toDTOs(posts) {
        const _posts = posts.map((post) => {
            const entity = post.toJSON();
            return entity;
        });
        return _posts;
    }
}
exports.PostMapper = PostMapper;
class TagMapper {
    toDTO(tag) {
        const entity = tag.toJSON();
        return entity;
    }
    toDTOs(tags) {
        const _tags = tags.map((tag) => {
            const entity = tag.toJSON();
            return entity;
        });
        return _tags;
    }
}
exports.TagMapper = TagMapper;
class CommentMapper {
    toDTO(comment) {
        const entity = comment.toJSON();
        return entity;
    }
    toDTOs(comments) {
        const _comments = comments.map((comment) => {
            const entity = comment.toJSON();
            return entity;
        });
        // const filteredComments = _comments.filter(c => c.parent_id === "" || c.parent_id === null);
        return _comments;
    }
}
exports.CommentMapper = CommentMapper;
class DocumentMapper {
    toDTO(document) {
        const entity = document.toJSON();
        return entity;
    }
    toDTOs(documents) {
        const _documents = documents.map((document) => {
            const entity = document.toJSON();
            return entity;
        });
        return _documents;
    }
}
exports.DocumentMapper = DocumentMapper;
class UserMapper {
    toDTO(user) {
        const entity = user.toJSON();
        return entity;
    }
    toDTOs(users) {
        const _users = users.map((user) => {
            const entity = user.toJSON();
            return entity;
        });
        return _users;
    }
}
exports.UserMapper = UserMapper;
class RoleMapper {
    toDTO(role) {
        const entity = role.toJSON();
        return entity;
    }
    toDTOs(roles) {
        const _roles = roles.map((role) => {
            const entity = role.toJSON();
            return entity;
        });
        return _roles;
    }
}
exports.RoleMapper = RoleMapper;
class ProjectMapper {
    toDTO(project) {
        const entity = project.toJSON();
        return entity;
    }
    toDTOs(projects) {
        const _projects = projects.map((project) => {
            const entity = project.toJSON();
            return entity;
        });
        return _projects;
    }
}
exports.ProjectMapper = ProjectMapper;
class BannerMapper {
    toDTO(banner) {
        const entity = banner.toJSON();
        return entity;
    }
    toDTOs(banners) {
        const _banners = banners.map((banner) => {
            const entity = banner.toJSON();
            return entity;
        });
        return _banners;
    }
}
exports.BannerMapper = BannerMapper;
class EventMapper {
    toDTO(event) {
        const entity = event.toJSON();
        return entity;
    }
    toDTOs(events) {
        const _events = events.map((event) => {
            const entity = event.toJSON();
            return entity;
        });
        return _events;
    }
}
exports.EventMapper = EventMapper;
class ServiceMapper {
    toDTO(service) {
        const entity = service.toJSON();
        return entity;
    }
    toDTOs(services) {
        const _services = services.map((service) => {
            const entity = service.toJSON();
            return entity;
        });
        return _services;
    }
}
exports.ServiceMapper = ServiceMapper;
